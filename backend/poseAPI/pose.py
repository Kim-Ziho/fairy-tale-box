from pycoral.adapters import common
from pycoral.utils.edgetpu import make_interpreter

import cv2
import numpy as np
import json

from fastapi import FastAPI, Request
from sse_starlette.sse import EventSourceResponse
from datetime import datetime 
import uvicorn
from sh import tail
from fastapi.middleware.cors import CORSMiddleware
import time 
import os
#create our app instance
app = FastAPI()

_NUM_KEYPOINTS = 17

#add CORS so our web page can connect to our api
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = '/home/nvidia/Pose/movenet_interface/model/movenet_single_pose_lightning_ptq_edgetpu.tflite'
interpreter = make_interpreter(model)
interpreter.allocate_tensors()
inference_size = common.input_size(interpreter)

threshold = .3
cap = cv2.VideoCapture(0)
print(cap, "is open:", cap.isOpened())

if not cap.isOpened():
    print("Cannot open camera")
    exit()
    
async def poseGenerator(request):
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            print("Can't receive frame (stream end?). Exiting ...")
            break

        frame = cv2.resize(frame, inference_size)

        frame = cv2.flip(frame, 1)
        common.set_input(interpreter, frame)
        interpreter.invoke()

        pose = common.output_tensor(interpreter, 0).copy().reshape(_NUM_KEYPOINTS, 3)
        pose = pose.astype(np.float16)
        pose = pose.tolist()
        pose_part = ["nose", "right_eye", "left_eye", "right_ear", "left_ear", "right_shoulder", "left_shoulder", "right_elbow", "left_elbow", "right_wrist", "left_wrist", "right_pelvis", "left_pelvis", "right_knee", "left_knee", "right_ankle", "left_ankle"]
        coord = ["y", "x", "accur"]
        poseTemp = []
        for p in pose:
            temp = dict(zip(coord, p))
            poseTemp.append(temp)
        pose_dict = dict(zip(pose_part, poseTemp))
        pose_json = json.dumps(pose_dict)
        if await request.is_disconnected():
            print("client disconnected!!!")
            break
        yield pose_json

@app.get('/stream-pose')
async def runStatus(request: Request):
    event_generator = poseGenerator(request)
    return EventSourceResponse(event_generator)

#run the app
uvicorn.run(app, host="0.0.0.0", port=8000)

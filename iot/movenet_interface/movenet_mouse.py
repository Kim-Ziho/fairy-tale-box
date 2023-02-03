from pycoral.adapters import common
from pycoral.utils.edgetpu import make_interpreter

import cv2
import numpy as np
import pyautogui

_NUM_KEYPOINTS = 17
WIDTH, HEIGHT = pyautogui.size()
pyautogui.moveTo(WIDTH / 2, HEIGHT / 2)


def main():

    model = '/home/pi/Project/model/movenet_single_pose_lightning_ptq_edgetpu.tflite'

    interpreter = make_interpreter(model)
    interpreter.allocate_tensors()
    inference_size = common.input_size(interpreter)

    threshold = .3
    cap = cv2.VideoCapture(0)
    print(cap, "is open:", cap.isOpened())

    if not cap.isOpened():
        print("Cannot open camera")
        exit()

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
        
        y, x, a = pose[9]
        cy, cx, b = pose[7]
        mx, my = pyautogui.position()
        gainX = WIDTH / 6
        gainY = HEIGHT / 6

        pyautogui.moveTo(mx + (x - cx) * gainX, my + (y - cy) * gainY)
        

    cap.release()

    

if __name__ == '__main__':
    main()

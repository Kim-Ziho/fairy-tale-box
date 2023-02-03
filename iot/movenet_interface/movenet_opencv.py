# Lint as: python3
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
r"""Example using PyCoral to estimate a single human pose with Edge TPU MoveNet.

To run this code, you must attach an Edge TPU to the host and
install the Edge TPU runtime (`libedgetpu.so`) and `tflite_runtime`. For
device setup instructions, see coral.ai/docs/setup.

For more details about MoveNet and its best practices, please see
https://www.tensorflow.org/hub/tutorials/movenet

Example usage:
```
python3 movenet_opencv.py

```
"""

from PIL import Image
from PIL import ImageDraw
from pycoral.adapters import common
from pycoral.utils.edgetpu import make_interpreter

import cv2
import numpy as np
from signal import signal

_NUM_KEYPOINTS = 17


def main():

    model = 'model/movenet_single_pose_lightning_ptq_edgetpu.tflite'

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
        print(pose)

        y, x, _ = frame.shape

        for k in pose[:,:]:
            # Checks confidence for keypoint
            if k[2] > threshold:
                # The first two channels of the last dimension represents the yx coordinates (normalized to image frame, i.e. range in [0.0, 1.0]) of the 17 keypoints
                yc = int(k[0] * y)
                xc = int(k[1] * x)

                # Draws a circle on the image for each keypoint
                frame = cv2.circle(frame, (xc, yc), 2, (0, 255, 0), 5)
        

        cv2.imshow('frame', frame)
        if cv2.waitKey(1) == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()

    

if __name__ == '__main__':
    main()

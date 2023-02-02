#include <PluggableUSBHID.h>
#include <USBHID_Types.h>
#include <USBHID.h>
#include <USBMouse.h>
#include <mbed.h>
#include <Arduino_LSM9DS1.h>

USBMouse bleMouse;

void setup() {
  if (!IMU.begin()) {
    while (1);
  }
  pinMode(4, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  //if the button is pressed, send a left mouse click
  int readValue = digitalRead(4);
  Serial.println(readValue);
  if(readValue == HIGH) {
    bleMouse.press(1);
  }
  else{
    bleMouse.release(1);
  }
}
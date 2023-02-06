/**
 * This example turns the ESP32 into a Bluetooth LE mouse that continuously moves the mouse.
 */
#include <BleMouse.h>

BleMouse bleMouse;

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");
  bleMouse.begin();
  pinMode(15, INPUT);
}
void loop() {
  //if the button is pressed, send a left mouse click
  int readValue = digitalRead(15);
  Serial.println(readValue);

  if(readValue == HIGH) {
    Serial.println("Left click");
    bleMouse.click(1);
  }
  else
  {
    bleMouse.release(MOUSE_LEFT);
  }
}
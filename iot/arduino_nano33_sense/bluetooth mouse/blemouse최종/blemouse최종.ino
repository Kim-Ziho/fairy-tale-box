/**
 * This example turns the ESP32 into a Bluetooth LE keyboard and mouse that writes 
 * some words, presses Enter, presses a media key and then Ctrl+Alt+Delete,
 * then moves and the scrolls the mouse and clicks it.
 */
 
#include <BleCombo.h>

void setup() {
  Serial.begin(115200);
  Serial.println("Starting work!");
  Keyboard.begin();
  Mouse.begin();
  pinMode(15, INPUT);
}

void loop() {
  if(Keyboard.isConnected()) {
    int readValue = digitalRead(15);
    Serial.println(readValue);
    if(readValue == HIGH) {
      Serial.println("Left click");
      Mouse.press(MOUSE_LEFT);
    }
    else
    {
      Mouse.release(MOUSE_LEFT);
    }
   delay(100);
  }
}
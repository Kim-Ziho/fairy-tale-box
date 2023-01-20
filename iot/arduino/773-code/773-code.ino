/*Modified by
 * Technical Team,REES52
 */
#include <Wire.h>
#include <I2Cdev.h>
#include <MPU6050.h>
#include <Mouse.h>
#define LBUT 7
#define RBUT 6

int xPin = A1;
int yPin = A0;
int buttonPin = 1;

int xPosition = 0;
int yPosition = 0;
int buttonState = 0;
MPU6050 mpu;
int16_t ax, ay, az, gx, gy, gz;

int angleToDistance(int a)
{
  if (a < -80)
  {
    return -40;
  }
  else if (a < -65) {
    return -20;
  }
  else if (a < -50) {
    return -10;
  }
  else if (a < -15) {
    return -5;
  }
  else if (a < -5) {
    return -1;
  }
  else if (a > 80) {
    return 40;
  }
  else if (a > 65) {
    return 20;
  }
  else if (a > 15) {
    return 10;
  }
  else if (a > 5) {
    return 1;
  }
}

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);

  Mouse.begin();

  pinMode(xPin, INPUT);
  pinMode(yPin, INPUT);

  //activate pull-up resistor on the push-button pin
  pinMode(buttonPin, INPUT_PULLUP);

  // For versions prior to Arduino 1.0.1
  // pinMode(buttonPin, INPUT);
  // digitalWrite(buttonPin, HIGH);
  // put your setup code here, to run once:
  pinMode(LBUT, INPUT);
  digitalWrite(LBUT, HIGH);
  pinMode(RBUT, INPUT);
  digitalWrite(RBUT, HIGH);
  Wire.begin();
  mpu.initialize();
  if (!mpu.testConnection()) {
    while (1);
  }
}
void loop() {
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  int vx = map(ax, -16000, 16000, 90, -90);
  int vy = map(ay, -16000, 16000, 90, -90);
  attachInterrupt(1, keyboard, CHANGE);
  attachInterrupt(7,fire,HIGH);
  Mouse.move(angleToDistance(vx), angleToDistance(vy));
  if (digitalRead(LBUT) == LOW) {
    if (!Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.press(MOUSE_LEFT);
    }
  }
  else {
    if (Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.release(MOUSE_LEFT);
    }
  }
  if (digitalRead(RBUT) == LOW) {
    if (!Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.press(MOUSE_RIGHT);
    }
  }
  else {
    if (Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.release(MOUSE_RIGHT);
    }
  }
  delay(20);
  xPosition = analogRead(xPin);
  yPosition = analogRead(yPin);
  buttonState = digitalRead(buttonPin);
  Serial.print("X: ");
  Serial.print(xPosition);


  Serial.print(" | Y: ");
  Serial.print(yPosition);
  Serial.print(" | Button: ");
  Serial.println(buttonState);

 // delay(100); // add some delay between reads


}
void keyboard()
{
  xPosition = analogRead(xPin);
  yPosition = analogRead(yPin);
  buttonState = digitalRead(buttonPin);
  Serial.print("X: ");
  Serial.print(xPosition);


  Serial.print(" | Y: ");
  Serial.print(yPosition);
  Serial.print(" | Button: ");
  Serial.println(buttonState);

  //delay(100); // add some delay between reads

}
void fire()
{
  
}

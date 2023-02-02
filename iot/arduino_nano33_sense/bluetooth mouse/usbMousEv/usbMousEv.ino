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
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
  
}

void loop() {
  float ax, ay, az;
  float prevxValue = 0, prevyValue = 0, prevzValue = 0;
  float xAcc = 0, yAcc = 0, zAcc = 0;
  int maxPosAcc = 5, maxNegAcc = -5;
  int state = 1;
  while(1) {

    digitalWrite(LED_BUILTIN, HIGH);

  if (IMU.accelerationAvailable  ()) {
    IMU.readAcceleration(ax, ay, az);
 
    if(ax > 0.3){// y-Axis up
      if(prevxValue > 0.3){
        if(yAcc < maxPosAcc){
        yAcc += ax;//maybe use ax ay for percision (done but needs ironing out, also put xy movement back)
        }
      }
      else {
        prevxValue = ax;
        yAcc = 0.1;
        }
      bleMouse.move(0,yAcc); // y-Axis down 
      }
      
    else if(ax < -0.3){// y-axis down
      if(prevxValue < -0.3){
        if(yAcc > maxNegAcc){
        yAcc -= -1*ax;
        }
      }
      else {
        prevxValue = ax;
        yAcc = -0.1;
        }
      bleMouse.move(0,yAcc); // y-axis up
      }
      
    else if(ay < -0.3){// x-axis right
      if(prevyValue < -0.3){
        if(xAcc > maxNegAcc){
        xAcc -= -1*ay;
        }
      }
      else {
        prevyValue = ay;
        xAcc = -0.1;
        }
      bleMouse.move(xAcc,0); // x-axis right
      }
      
    else if(ay > 0.3){// x-axis left
      if(prevyValue > 0.3){
        if(xAcc < maxPosAcc){
        xAcc += ay;
        }
      }
      else {
        prevyValue = ay;
        xAcc = 0.1;
        }
        bleMouse.move(xAcc,0); // x-axis left
    }
    
     if(ay > 0.3 and ax < -0.3){// x,y-axis left, up 
      if(prevyValue > 0.3 and prevxValue < -0.3){
        if(xAcc < maxPosAcc){ //if X is tilted
        xAcc += ay;}
        if(yAcc > maxNegAcc){ //if y is tilted
        yAcc -= -1*ax;}
        }
      else {
      if(xAcc > maxNegAcc){//no idea what that does
        prevyValue = ay;
        xAcc = 1;}
      if (yAcc > maxNegAcc){
        prevxValue = ax;
        yAcc = -0.1;}   
      else {
        prevxValue = ax;
        yAcc = -0.1;
        prevyValue = ay;
        xAcc = 0.1;}
      }
      bleMouse.move(xAcc,yAcc); // x,y-axis left, up
      }  


     else if(ay < -0.3 and ax < -0.3){// x,y-axis right, up
      if(prevyValue < -0.3 and prevxValue < -0.3){
        if (xAcc > maxNegAcc){ //if x is tilted
        xAcc -= -1*ay;}
        if(yAcc > maxNegAcc){ //if y is tilted
        yAcc -= -1*ax;}  
        }
      else {
      if (xAcc > maxNegAcc){//no idea what that does
        prevyValue = ay;
        xAcc = -0.1;}
      if (yAcc > maxNegAcc){
        prevxValue = ax;
        yAcc = -0.1;}   
      }
      bleMouse.move(xAcc,yAcc); // x,y-axis right, up
      }

     else if(ay > 0.3 and ax > 0.3){// x,y-axis left, down
      if(prevyValue > 0.3 and prevxValue > 0.3){
        if (xAcc < maxPosAcc){ //if x is tilted
        xAcc += ay;}
        if(yAcc < maxPosAcc){ //if y is tilted
        yAcc += ax;}  
        }
      else {
      if (xAcc < maxPosAcc){//no idea what that does
        prevxValue = ax;
        yAcc = 0.1;}
      if (yAcc < maxPosAcc){
        prevyValue = ay;
        xAcc = 0.1;}   
      }
      bleMouse.move(xAcc,yAcc); // x,y-axis left, down
      }

   else if(ay < -0.3 and ax > 0.3){// x,y-axis right, down
      if(prevyValue < -0.3 and prevxValue > 0.3){
        if (xAcc > maxNegAcc){ //if x is tilted
        xAcc -= -1*ay;}
        if(yAcc < maxPosAcc){ //if y is tilted
        yAcc += ax;}  
        }
      else {
      if (xAcc > maxNegAcc){//no idea what that does
        prevyValue = ay;
        xAcc = -0.1;}
      if (yAcc < maxPosAcc){
        prevxValue = ax;
        yAcc = 0.1;}   
      }
      bleMouse.move(xAcc,yAcc); // x,y-axis right, down
      }
  } 


/*
    else if(az < -0.3 and digitalRead(3) == LOW and digitalRead(2) == LOW){// mouse wheel down
      if(prevzValue < -0.3){
        if(zAcc > maxNegAcc){
        zAcc -= 1;
        }
      }
      else {
        prevzValue = az;
        zAcc = -1;
        }
      bleMouse.move(0,0,zAcc); // mouse wheel down
      }
      
    else if(az > 0.3 and digitalRead(3) == LOW and digitalRead(2) == LOW){// mouse wheel up
      if(prevzValue > 0.3){
        if(zAcc < maxPosAcc){
        zAcc += 1;
        }
      }
      else {
        prevzValue = az;
        zAcc = 1;
        }
        bleMouse.move(0,0,zAcc); // mouse wheel up
    }   
*/ 

  //if the button is pressed, send a left mouse click
  if (digitalRead(4) == LOW) {
    bleMouse.click(1);
    if (digitalRead(4)==HIGH)
    {bleMouse.release(1);}
    delay(100);
    }
    
    //if the button is pressed, send a middle mouse click
  if (digitalRead(3) == LOW) {
    bleMouse.click(4);
    if (digitalRead(3)==HIGH)
    {bleMouse.release(4);}
    delay(100);
    }
    //if the button is pressed, send a right mouse click
  if (digitalRead(2) == LOW) {
    bleMouse.click(2);
    if (digitalRead(2)==HIGH)
    {bleMouse.release(2);}
    delay(100);
    }
  }
 
  
  digitalWrite(LED_BUILTIN, LOW);
  }
 


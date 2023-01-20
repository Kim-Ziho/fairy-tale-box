const int sampleWindow = 30; 
unsigned int sample;

const int PlayPin = 12;
void setup() {
  Serial.begin(115200);
  pinMode(PlayPin, OUTPUT);
}

void loop() {
  unsigned long startMillis = millis(); 
  unsigned int peakToPeak = 0;   

  unsigned int signalMax = 0;
  unsigned int signalMin = 1024;

  while (millis() - startMillis < sampleWindow)
  {
    sample = analogRead(A3);
    if (sample < 1024)  // toss out spurious readings
    {
      if (sample > signalMax)
      {
        signalMax = sample;  // save just the max levels
      }
      else if (sample < signalMin)
      {
        signalMin = sample;  // save just the min levels
      }
    }
  }
  peakToPeak = signalMax - signalMin;  
  double volts = (peakToPeak * 5.0) / 1024;  

  Serial.println(volts);
  
  
  if(volts > 3.5)
    digitalWrite(PlayPin, HIGH);
  else
    digitalWrite(PlayPin, LOW);
    delay(100);
    
  
}
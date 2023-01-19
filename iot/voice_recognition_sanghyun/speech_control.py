import os
from google.cloud import speech

from micstream import MicrophoneStream

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]=\
"sh-speech-305600-333c85f935ee.json"

RATE=44100
CHUNK=int(RATE/10)



def listen_print_loop(responses):
    
    for response in responses:
        result=response.results[0]
        transcript=result.alternatives[0].transcript
        
        print(transcript)
    
        if u'종료' in transcript or u'그만' in transcript:
            print('종료합니다..')
            break
        
        # serve(transcript)

def speech_control():
    language_code='ko-KR'

    client=speech.SpeechClient()
    config=speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=RATE,
        language_code=language_code)
    streaming_config=speech.StreamingRecognitionConfig(config=config)

    print(1)

    with MicrophoneStream(RATE,CHUNK) as stream:
        audio_generator=stream.generator()
        requests=(speech.StreamingRecognizeRequest(audio_content=content)
                  for content in audio_generator)
        responses=client.streaming_recognize(streaming_config,requests)

    
        listen_print_loop(responses)

speech_control()
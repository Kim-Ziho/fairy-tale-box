import os
from datetime import datetime
from google.cloud import speech
from preprocess_audio import preprocess_audio
from transcribe_local import transcribe_local

# Defining all important variables

bucket_name = 'hyunyoung'

config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=44100,
            language_code="ko-KR",
            audio_channel_count=1,
            enable_automatic_punctuation=True,
            model="default",
            use_enhanced=True
        )

source_path = 'audio'
destination_path = 'text'

# Preprocessing audio (uncomment to run)
#source_path = preprocess_audio(source_path)

# Running the transcriber

now = datetime.now()
current_time = now.strftime('%Y-%m-%d-%H-%M-%S')

transcriptions_folder = f'{destination_path}'
os.makedirs(transcriptions_folder)

print(transcriptions_folder)
print('Initializing transcriptions...')

for file in os.listdir(source_path):
    results = transcribe_local(f'{source_path}/{file}', bucket_name=bucket_name, config=config)
    with open(f'{transcriptions_folder}/{file[:-4]}.txt', 'w') as f:
        for result in results:
            f.write(result.alternatives[0].transcript + ' ')


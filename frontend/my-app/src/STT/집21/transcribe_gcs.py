from google.cloud import speech

def transcribe_gcs(gcs_uri, config=None):
    """Asynchronously transcribes the audio file specified by the gcs_uri.

    config : speech.RecognitionConfig object
        provides information to the recognizer that specifies how to process the request"""

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)

    if config == None:
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=44100,
            language_code="en-US",
            audio_channel_count=1
        )

    operation = client.long_running_recognize(config=config, audio=audio)

    print("Waiting for operation to complete...")
    response = operation.result()
    print("Concluded!")
    print(response)
    # Each result is for a consecutive portion of the audio. Iterate through
    # them to get the transcripts for the entire audio file.
    print(response.results)
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        print(u"Transcript: {}".format(result.alternatives[0].transcript))
        print("Confidence: {}".format(result.alternatives[0].confidence))
        
    return response.results
    
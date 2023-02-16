from google.cloud import storage
from transcribe_gcs import transcribe_gcs

def transcribe_local (file_path, bucket_name, config=None):
    """
    Asynchronously transcribes local audio files specified by file_path by
    temporarily storing them in google cloud storage (gcs) and using its 
    speech-to-text API to transcribe it.
    
    Parameters
    -------------
    file_path : str
        the file path of the file to be transcribed

    bucket_name : str
        the name of gsc the bucket whre the files will
        be temporarily stored

    config : speech.RecognitionConfig object
        provides information to the recognizer that specifies how to process the request
    """

    # Accessing the gcs bucket
    client = storage.Client()
    bucket = client.get_bucket(bucket_name)

    # Uploading the audio file
    blob_name = 'temp'
    blob = bucket.blob(blob_name)
    blob.upload_from_filename(file_path)

    #Transcribing the audio file
    transcription = transcribe_gcs(f'gs://{bucket_name}/{blob_name}', config=config)

    # Deleting the audio file from the cloud
    bucket.delete_blob(blob_name)

    return transcription
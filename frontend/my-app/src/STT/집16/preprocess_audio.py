import os
from pydub import AudioSegment

def preprocess_audio(source_path, format='wav'):
    """
    Turns the audio files in a specified folder into single-channel WAV files as GCP works 
    with single channel files and performs best when used with FLAC or LINEAR16 encoding.

    Parameters
    -------------
    file_path : str
        the file path of the folder containing the audio files

    format : str
        the format for the files to be encoded in
    """

    os.makedirs('preprocess/', exist_ok=True)

    print("Preprocessing audio...")

    for file in os.listdir(source_path):
        sound = AudioSegment.from_file(f'{source_path}/{file}')
        sound = sound.set_channels(1)
        sound.export(f'preprocess/{file[:-4]}.{format}', format=format)

    return 'preprocess'


print(preprocess_audio('audio'))

# Usage Guide
The code in this repository transcribes local audio files in a speficied path and outputs the transcriptions as text files in a separate folder.

It makes use of Google Cloud's Speech-to-text and Storage APIs, requiring a service account key and the creation of a bucket to be used by this application, which means a google cloud account is also required.

As such, when running this code, you should change the bucket_name variable defined in main.py to the name of the bucket you created.

```
bucket_name = 'name-of-your-bucket'
```

Also in the main.py file are the config parameters used by the transcriber.

```
config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
            sample_rate_hertz=48000,
            language_code="pt-BR",
            audio_channel_count=1,
            enable_automatic_punctuation=True,
            model="phone_call",
            use_enhanced=True
        )
```
The paramaters are mostly self-descriptive, with the list of all possible languages available [here](https://cloud.google.com/speech-to-text/docs/languages). You can also find a description of the config parameters [here](https://cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig).

The code will go through a specified folder of audio files **encoded as defined by the config parameters** and transcribe them, writing all the transcriptions as .txt files saved in a specified destination folder.

The source folder containing all the audio files and the destination folder where the transcription files will be sent are also defined at main.py.

```
source_path = 'audio'
destination_path = 'text'
```

# Set Up Guide

This guide explains how to set up a project, enable the speech-to-text API, get a service account key, create a bucket to use with this application, as well as how to set up an enviroment variable to be able to run the code.

## Dependencies 
1. google-cloud-speech
2. google-cloud-storage

## Setting Up a Project
Upon creating or logging into your Google Cloud account and setting up your free trial in case your account is new, you can select an existing project or create a new project by clicking the "Select a project tab" on the upper left corner of the screen. 

![ss](https://user-images.githubusercontent.com/24488357/140826497-f8d9b697-935b-42fe-92b7-b4e0275c8249.png)

A pop up screen will show up and allow you to select one of you existing projects or create a new one by clicking the button on the upper right corner of the pop up screen.

## Enabling the API
With the project open, you can use the search bar at the top to search for the Speech-to-text API. Upon entering the API's page, click the enable API button to enable its usage.

![Captura de tela 2021-11-08 194216](https://user-images.githubusercontent.com/24488357/140829808-09d0982b-6f4c-45e0-958c-0afa90fd607c.png)

## Creating a Bucket
Having enabled the API, you ccan use the search bar to search for "Cloud Storage", which will take you to the Google Cloud Storage page. You can create a new bucket by clicking the button on the upper left corner of the Storage page.

![Captura de tela 2021-11-08 194723](https://user-images.githubusercontent.com/24488357/140830347-0bffb1cb-6370-4fca-bf86-d0b3a1502a38.png)

The name you give this bucket will be used when running the code.

## Acquiring a Service Account Key
To acquire the service account key you'll need to run the code, search for "APIs & Services" in the search bar and, after entering the page, navigate to Credentials.

![Captura de tela 2021-11-08 195025](https://user-images.githubusercontent.com/24488357/140830792-ddbb028f-a6f0-4b25-8dd0-6a53816e4003.png)

Create a new credential by clicking on the button located on the upper left corner of the page and select the **"Service account"** option. The name you give it doesn't matter.

![Captura de tela 2021-11-08 195925](https://user-images.githubusercontent.com/24488357/140831688-ffe6bc2f-ae09-4802-a40e-d12d6ac88344.png)

After creating the account, click on it and go into the keys tab. All that's left to do is to add a new .JSON key. You will need the path to this key to set up the environment variable.

## Setting Up an Environment Variable

Every terminal session you create, it is necessary to set up an enviroment variable before you run the code. This is so Google Cloud can autheticate you through your service account key.

To set up a environment variable on windows, run the following line:

```
set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
```

Where KEY_PATH corresponds to the path to the .JSON service account key you got from the previous step.

The command on linux is as follows:

```
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

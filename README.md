# README.md

# 🧚🏻‍♂️ 동화상자

![Untitled](README_source/Untitled.png)

## ✨ 프로젝트 소개

```
동화와 놀이로 배우는 영유아 언어발달 도구
큰 의미는 없지만 말 그대로 동화가 들어있는 상자라는 뜻으로
```

## 🙂 기획 배경

```
 - 코로나로 인해 사람들이 만남을 줄이고 마스크를 쓰면서 아이들이 말을 하며 들으며 언어발달을 할 기회가 줄어들었다. 이러한 상황속에서 아이들에게 언어발달을 도움을 주기위한 방법이 무엇이 있을까에서 기획을 구상하게 되었다.
- 아이들은 단순히 언어발달을 위한 학습은 지루하고 집중하기 어렵다. 이에 동화와 놀이를 결합한 행동을 함께 할 수 있는 언어발달 도구 를 고안하게 되었다.

```

## 😎 서비스 기능

1. 기기당 부여받은 1개의 시리얼 코드를 활용한 회원가입
2. 로그인 여부를 통한 동화 접속
3. 여러가지의 동화 선택
4. 행동 및 언어인식을 기반으로 둔 다양한 동화 컨텐츠

## 👀 Overview

### 1. 유저 로그인 페이지 & 유저 회원가입 페이지

![Untitled](README_source/Untitled%201.png)

![Untitled](README_source/Untitled%202.png)

### 2. 메인페이지

![Untitled](README_source/Untitled%203.png)

### 3. 동화선택 페이지

![Untitled](README_source/Untitled%204.png)

### 4. 학습기록 페이지 & 학습기록 자세히 페이지

![Untitled](README_source/Untitled%205.png)

![Untitled](README_source/Untitled%206.png)

### 5. 동화전개 페이지

![Untitled](README_source/Untitled%207.png)

### 6. 학습결과 페이지

## 🦄 기대효과 & 발전방향

- 놀이와 반복학습을 결합한 언어발달 도모
- 동화를 하는 과정에서 아이와 부모의 유대감 증진
- 콘텐츠 다운로드를 통한 다양한 동화를 다운받아 더 많은 동화를 즐길수 있다
- 카메라와 마이크가 결합된 디바이스에 사용을 가능하게 해 플랫폼 확장
- 나이가 더 많은 아이들의 제2외국어 학습을 기대할수 있다

## 💻 Tech Stack

![Untitled](README_source/Untitled%208.png)

![Untitled](README_source/Untitled%209.png)

```jsx
Coral Accelerator의 MoveNet에서 나온 17가지 관절 포인터들을 JSON 형태로 파씽하여
FastAPI의 SSE 기능으로 실시간으로 React에 데이터를 전송, 행동 미션에 사용한다.
```

![Untitled](README_source/Untitled%2010.png)

```jsx
mpu6500과 esp32는 i2c통신 방법을 통해 축의 데이터를 주고받습니다. 
아두이노는 해당 데이터를 블루투스 통신을 통해 nivida의 마우스를 제어합니다
```

## ERD

![Screenshot_20230217_013839_Microsoft 365 (Office).jpg](README_source/Screenshot_20230217_013839_Microsoft_365_(Office).jpg)

## Backend

```
Spring
Google STT API
```

### Frontend

```
$ cd frontend/my-app
$ npm install
$ npm start
```

### Backend : Pose Estimate

```cpp
$ cd backend/poseAPI
$ python3 pose.py
```

### Backend : STT

```cpp
$ cd backend/talebox_nodejs/backend
$ npm install
$ npm start
```

## 🤼‍♂️ Author

Team Leader & IoT: 🐯김지호

IoT : 🐱 고현영

Backend : 🐶 조승현

Backend: 🐺 박상현

Frontend : 🐱 유승규

Frontend : 🦁 조유빈
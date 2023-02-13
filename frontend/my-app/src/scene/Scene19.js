import React ,{useState,useEffect} from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene19.css";
import Modal from "../modal/ResultModal.js";
import axios from "axios";

// 하단은 음성파일
const audio19_1 = new Audio("sound/19-1.mp3");
const audio19_2 = new Audio("sound/19-2.mp3");
const start = () => {
  setTimeout(() => {
    audio19_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio19_2.play();
  }, 15000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '이렇게 해서, 하늘로 올라간 귀여운 동생은 해님이,'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '씩씩한 오빠는 달님이 되었답니다.'
  },5020)

}
const Scene19 = () => {
  useEffect(()=>{
    axios({
      method:'post',
      url:"http://i8c101.p.ssafy.io/api/history",
      data:{
        "member_id":2,
        "story_id":1,
        "studyDate": new Date()
      }
    })
    .then((res) => {
      const number = res.data
      setTimeout(() => navigate(`/scene2`, { state: { value: number } }), 23120)
      setTimeout( () =>
        axios({
          method:'get',
          url:`http://192.168.100.245:3001/startrecord?wordname=엄마&hist_num=${number}&word_id=1`
        }),14050
      )
    })
  });

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(start2)
  setTimeout(()=>openModal(),12000)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene19/19.png" className="bgImg" alt="#"></img>
        <h1 className="word19-1">햇님</h1>
        <div className="popup19-1"></div>
        <h1 className="word19-2">달님</h1>
        <div className="popup19-2"></div>
        <h2 id="Text"> </h2>  
        <Modal open={modalOpen} header="학습 완료">
          <footer className="modalFooter"></footer>
        </Modal>
    </div>
  );
};

export default Scene19;

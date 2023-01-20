import React from "react";
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Login from './Login';

function QR(props){
    return(
        <div>
            <h1>고슬라에 오신 것을 환영합니다!</h1>
            <h2>스마트폰으로 QR코드를 인식하여 로그인 해주세요!</h2>
            <Link to="/">로그인하러 가기</Link>
        </div>
    );
}

export default QR;

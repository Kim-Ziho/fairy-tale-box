import React from "react";
import {Link} from 'react-router-dom';
import './Qr.css';

const Qr = () =>{
    return(
        <div className="qrcontainer">
            <div>동화상자</div>
            <div>회원가입 큐알코드</div>
            <img src="img/sunandmoon_select1.png"></img>
            <div>
            <Link to="/">인증하기</Link>
            </div>
        </div>
    )
}

export default Qr
import React from "react";
import { Link } from 'react-router-dom';

const Main = () =>{
    return(
        <div>
            메인이요
            <Link to="/home">
            <button>동화 선택하기 </button>
            </Link>
            <Link to="/history">
            <button>학습기록페이지 </button>
            </Link>
        </div>
    )
}

export default Main
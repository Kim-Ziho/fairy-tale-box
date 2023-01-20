import React from "react";
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Login from './Login';
import "./Login.css";
import Button from '@mui/material/Button';
function Signin(props) {
    return (
        <div className="Login">
            <h1>회원가입을 해줘요</h1>
            <div>
                시리얼 넘버 <input type="text" />
             </div>
            <div>
                아이디 <input type="text" />
            </div>
            <div>
                비밀번호 <input type="text" />
            </div>
            <div>
                비밀번호 확인 <input type="text" />
            </div>
            <Link to="/"><Button>로그인하러 가기</Button></Link>
        </div>
    );
}

export default Signin
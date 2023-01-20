import React from "react";
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Signin from './Signin';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Login.css";

function Login(props) {
    return (
        <div className="Login">
            <h1>로그인을 해주세요</h1>
            <div className="box">
                <div className="content">
                <input type="text" />
                </div>
                <div className="content">
                <input type="text" />
                </div>
            </div>
            <div className="content">
                <Button variant="contained">로그인하기</Button>
            </div>
            <div className="content">     
                <Link to="/Signin">
                    <Button variant="contained">회원가입
                    </Button>
                </Link>
            </div>
        </div>

    );
}

export default Login;
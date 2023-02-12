import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css'
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;
        if (regex.test(password)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }, [password])

    const axiosuser = () => {
        axios.post('http://i8c101.p.ssafy.io/api/member/login', {
            email,
            password,
        })
            .then((res) => {
                alert("로그인 성공! 플레이를 진행해주세요")
                setEmail('')
                setPassword('')
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <div className='body'>
            <div className='titleWraplogin'>
                🧚🏻‍♀️ 동화상자 🧚🏻‍♂️
            </div>

            <div className='contentWraplogin'>
                <div className='inputTitlelogin'>이메일 주소</div>
                <div className='inputWraplogin'>
                    <input
                        type='text'
                        className='inputlogin'
                        placeholder='test@gmail.com'
                        value={email}
                        onChange={handleEmail} />
                </div>
                <div className='errorMessageWraplogin'>
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요</div>
                    )}
                </div>


                <div style={{ marginTop: "26px" }} className='inputTitlelogin'>비밀번호</div>
                <div className='inputWraplogin'>
                    <input
                        type='password'
                        className='inputlogin'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                        value={password}
                        onChange={handlePassword} />
                </div>
                <div className='errorMessageWraplogin'>
                    {!passwordValid && password.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
                    )}
                </div>
            </div>

            <div>
                <button onClick={() => { axiosuser() }} className='bottomButtonlogin'>
                    로그인
                </button>
            </div>



            <div className='newAccountlogin'>
                <Link to="/join">새 계정 만들기</Link>
            </div>

        </div>
    )
}
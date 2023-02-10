import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);


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
        console.log(password)

    }

    useEffect(() => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;
        if (regex.test(password)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }, [password])

    useEffect(() => {
        if (emailValid && passwordValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    }, [emailValid, passwordValid])


    const axiosuser = () => {
        axios.post('http://localhost:8080/api/member/login', {
            email,
            password,

        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    }

    return (
        <div className='body'>
            <div className='page'>
                <div className='titleWrap'>
                    이메일과 비밀번호를
                    <br />
                    입력해주세요
                </div>

                <div className='contentWrap'>
                    <div className='inputTitle'>이메일 주소</div>
                    <div className='inputWrap'>
                        <input
                            type='text'
                            className='input'
                            placeholder='test@gmail.com'
                            value={email}
                            onChange={handleEmail} />
                    </div>
                    <div className='errorMessageWrap'>
                        {!emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요</div>
                        )}
                    </div>


                    <div style={{ marginTop: "26px" }} className='inputTitle'>비밀번호</div>
                    <div className='inputWrap'>
                        <input
                            type='password'
                            className='input'
                            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                            value={password}
                            onChange={handlePassword} />
                    </div>
                    <div className='errorMessageWrap'>
                        {!passwordValid && password.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
                        )}
                    </div>
                </div>

                <div>
                    <button onClick={() => { axiosuser() }} disabled={notAllow} className='bottomButton'>
                        확인
                    </button>
                </div>

                <Link to="/join">회원가입페이지로</Link>

            </div>
        </div>
    )
}
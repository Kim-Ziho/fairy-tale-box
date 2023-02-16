import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import Modal from "../modal";
import './join.css'


const Join = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkedPassword, setCheckedPassword] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [matchPassword, setMatchPassword] = useState(false);
    const [nickname, setNickname] = useState('');
    const [emailCheck, setEmailCheck] = useState(false);
    const [nicknameCheck, setNicknameCheck] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [notAllow1, setNotAllow1] = useState(true);
    const [notAllow2, setNotAllow2] = useState(true);



    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    const navigate = useNavigate()

    const goToLogin = () => {
        setModalMessage("회원가입이 완료되었습니다.")
        openModal();
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
            setNotAllow1(false);
        } else {
            setEmailValid(false);
            setNotAllow1(true);
        }
    }

    const handleCheckedPassword = (e) => {
        setCheckedPassword(e.target.value);

    }

    const handleNickname = (e) => {
        setNickname(e.target.value);
    }
    useEffect(() => {
        if (nickname.length > 0 && nickname.length < 9) {
            setNotAllow2(false)
        }
        else {
            setNotAllow2(true)
        }
    })

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

    useEffect(() => {
        if (password === checkedPassword && password.length > 0) {
            setMatchPassword(true);
        } else {
            setMatchPassword(false);
        }

    }, [checkedPassword])


    const axiossignup = () => {
        axios.post('http://i8c101.p.ssafy.io/api/member/signup', {
            email,
            nickname,
            password,
            checkedPassword,
            serialNum: "동화상자c101-1"
        })
            .then((res) => {
                goToLogin()
            })
            .catch((err) => {
                if (err.response.data.message.includes("Validation failed for object='signUpRequestDto'")) {
                    setModalMessage("유효성 검사를 진행해주세요")
                    openModal()
                }
                else {
                    setModalMessage(err.response.data.message)
                    openModal()
                }

            })
    }

    const axiosemail = () => {
        axios.post('http://i8c101.p.ssafy.io/api/member/email/check', {
            email,
        })
            .then((res) => {
                setEmailCheck(true);
                setModalMessage("사용 가능한 이메일입니다.")
                openModal();
            })
            .catch((err) => {
                console.log(err)
                setModalMessage(err.response.data.message)
                openModal();
            })
    }

    const axiosnickname = () => {
        axios.post('http://i8c101.p.ssafy.io/api/member/nickname/check', {
            nickname,
        })
            .then((res) => {
                setNicknameCheck(true);
                setModalMessage("사용 가능한 닉네임입니다.")
                openModal();
            })
            .catch((err) => {
                console.log(err)
                setModalMessage(err.response.data.message)
                openModal();
            })

    }

    return (
        <div className='page'>
            <div className='titleWrap'>
                🧚🏻‍♀️ 동화상자 🧚🏻‍♂️
            </div>

            <div className='contentWrap'>
                <div className='inputTitle'>이메일 주소</div>
                <div className='inputWrapCheck'>
                    <input
                        type='text'
                        className='input'
                        placeholder='test@gmail.com'
                        value={email}
                        onChange={handleEmail} />
                    <button className="checkButton" onClick={() => { axiosemail() }} disabled={notAllow1}> 중복검사</button>
                </div>

                <div className='errorMessageWrap'>
                    {!emailValid && email.length > 0 && (
                        <div>이메일 형식이 유효하지 않습니다.</div>
                    )}
                </div>
                <div className='inputTitle'>닉네임</div>
                <div className='inputWrapCheck'>
                    <input
                        type='text'
                        className='input'
                        placeholder='닉네임은 8자 이하입니다.'
                        value={nickname}
                        onChange={handleNickname} />
                    <button className="checkButton" onClick={() => { axiosnickname() }} disabled={notAllow2}>
                        중복검사
                    </button>

                </div>
                <div className='errorMessageWrap'>
                    {nickname.length > 8 && (
                        <div>닉네임은 8자 이하입니다.</div>
                    )}</div>



                <div style={{ marginTop: "15px" }} className='inputTitle'>비밀번호</div>
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
                <div style={{ marginTop: "15px" }} className='inputTitle'>비밀번호 확인</div>
                <div className='inputWrap'>
                    <input
                        type='password'
                        className='input'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                        value={checkedPassword}
                        onChange={handleCheckedPassword} />
                </div>
                <div className='errorMessageWrap'>
                    {!matchPassword && checkedPassword.length > 0 && (
                        <div>비밀번호가 일치하지 않습니다.</div>
                    )}
                </div>

                <div>
                    <button onClick={() => { axiossignup() }} className='bottomButton'>
                        회원가입
                    </button>

                    <Modal open={modalOpen} close={closeModal} main={modalMessage}>

                        <footer className="modalFooter"></footer>
                    </Modal>
                </div>
            </div>
            <button className="goLogin" onClick={() => {
                navigate("/login")
            }}>CLICK TO LOGIN</button>
        </div>



    )

}

export default Join

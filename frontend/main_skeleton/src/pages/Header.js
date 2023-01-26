import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'


function Header(props) {


    return (
		<>
        <div className='Header'>
			<h1>헤더입니다.</h1>
            <Link to="/scene1">첫씬 고고</Link>
            <br></br>
            <Link to="/scene2">두번째 씬 고고</Link>
            <br></br>
            <Link to="/">메인으로</Link>
            <br></br>
            <Link to="/product">프로덕트</Link>
        </div>
		</>
    );
}

export default Header;
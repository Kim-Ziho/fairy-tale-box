import React from "react";
import {useNavigate} from "react-router" 

const Back = () =>{
    let navigate = useNavigate();
    function handleClick(){
        navigate(-1)
    }

    return(
        <div>
            <button onClick={() => navigate(-1)}> 뒤로 가자 </button>
        </div>
    )
}

export default Back
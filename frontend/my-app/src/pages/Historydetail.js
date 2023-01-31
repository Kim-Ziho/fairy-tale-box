import React from "react";
import { useParams} from "react-router-dom";
import historydata from "./historydata.json"
import Back from "./Back";
import "./Historydetail.css"

const Historydetail = () => {
    const { historyId } = useParams();
    const thisHistory = historydata.find((prod) => prod.id === historyId);
    
    return(
        <div className="Box">
        <div className="back">
        <Back/>
        </div>
        <div className="top">
        <h1> {thisHistory.name} </h1>
        </div>  
        <hr></hr>
        <div className="passorfail">
            <h2>맞은 단어</h2>
            <h2>틀린 단어</h2>
            <div className="historydetailContainer">
                <div className="containerbox">
                    그림
                </div>
                <div className="containerbox">
                    단어
                </div>
                <div className="containerbox">
                    음성듣기
                </div>
            </div>
            <div className="historydetailContainer">
                <div className="containerbox">
                    그림
                </div>
                <div className="containerbox">
                    단어
                </div>
                <div className="containerbox">
                    음성듣기
                </div>
            </div> 
        </div>
        <div className="passorfail">
        
        </div>
            
                   
    </div>
    )
}

export default Historydetail
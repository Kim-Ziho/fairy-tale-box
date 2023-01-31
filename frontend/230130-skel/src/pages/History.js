import React from "react";
import { Link } from 'react-router-dom';
import Back from "./Back";
import historydata from "./historydata.json"

const History = () =>{
    const historys = historydata.map(history =>{
        return (
            <div key={history.id}>
                <h3>
                    <Link to={`/history/${history.id}`}>{history.name}</Link>
                </h3>
                <p>price : ${history.price}</p>
            </div>
        )
    });

    return(
        <div>
            <Back/>
            학습기록 페이지입니다.
            {historys}
        </div>
    )
}

export default History
import React from "react";
import { useParams} from "react-router-dom";
import historydata from "./historydata.json"
import Back from "./Back";

const Historydetail = () => {
    const { historyId } = useParams();
    const thisHistory = historydata.find((prod) => prod.id === historyId);
    return(
        <div>
            <h1>{thisHistory.name}</h1>
            <Back/>
        </div>
    )
}

export default Historydetail
import React from "react";
import loading from "../../../style/select/loading.module.css"
import LoadImg from "../../../assets/icons/loading.svg"

const Loading = function (){
    return (
        <div className={loading.loading}>
            <div className={loading.icon}>
                <img src={LoadImg} alt="Close" width="100" height="100" />
            </div>
        </div>
    );
}

export default Loading
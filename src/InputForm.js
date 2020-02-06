import React from "react";
import { checkPropTypes } from "prop-types";
const InputForm = (props)=>{
    return (<div>
        <input type = "text"></input>
        <button onClick = {props.click}></button>
    </div>)
}
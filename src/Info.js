import React from "react";
const Info = (props)=>{
    return (<div>
        <div>Year of release: {props.year}</div>
        <div>Actors name: {props.actors}</div>
        <div>Director name: {props.director}</div>
    </div>)
}
export default Info;
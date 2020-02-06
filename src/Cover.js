import React from "react";
const Cover = (props) =>{
    return(
        <div>
            <div>Movie Title: {props.title}</div>
            <img src = {props.image} alt='movie_pic'/>
        </div>
    )
}
export default Cover;
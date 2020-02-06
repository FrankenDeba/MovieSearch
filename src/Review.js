import React from "react";
const Review = (props) =>{
    return (
        <div>
            <div>Movie Genre: {props.genre}</div>
            <div>Movie Rating: {props.rating}</div>
            <div>Movie Plot: {props.plot}</div>
        </div>
        
    )
}
export default Review;
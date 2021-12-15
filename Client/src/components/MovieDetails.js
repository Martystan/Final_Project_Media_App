import React, { useState } from 'react';
import "./css/MovieDetail.css";



const MovieDetail = ({selectedMovie, handleAddToListSubmit, list1, list2, list3, onButtonClick}) => {

const [selectedList, setSelectedList] = useState(null);

const handleSelect = function(event){
    setSelectedList(event.target.value)
    console.log(event.target.value)
}

const handleSubmit = function(event){
        event.preventDefault();
        handleAddToListSubmit(selectedMovie, selectedList)}

const handleButtonClick = function(event){
    onButtonClick()
}

return (
        <>
        <div id ="detail-popup-box">
        <div>
            <h3>{selectedMovie.title}</h3>
            <div id = "descrip-poster">
            <img id = "detail-poster" src={selectedMovie.poster}></img>
            <div id ="description">
            <p>{selectedMovie.description}</p>
            
            </div>
            </div>
        </div>
        <button id = "close-button" onClick = {handleButtonClick}>X</button>
        <div>
            <h3>Add to List</h3>
            <form  onSubmit={handleSubmit}>
            <select id = "dropdown" defaultValue="" onChange={handleSelect}>
                <option selected="selected">Please select...</option>
                <option value="4">Favourite Movies</option>
                <option value="5">Watch Later</option>
                <option value="6">Movies for the kids</option>

            </select>
            <input id= "save-button" type="submit" name="submit" value="Save" />
            </form>

            {/* <button onClick = {handleWatchedStatus}>Watched</button> */}


        </div>
        </div>
        </>

    );
};


export default MovieDetail;
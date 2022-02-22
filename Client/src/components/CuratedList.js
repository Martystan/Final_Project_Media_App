import React from "react";
import Movie from "./Movie";
import "./css/MovieList.css";
import "./css/MovieListButton.css"
import MovieDetail from "./MovieDetails";
const CuratedList = ({list1, list2, list3, onMovieClick, onButtonClick, handleViewChange, viewUserLists, savedMovies}) => {
    const curatedList1 = list1.map((movie, index) => {
        return (
            
            <li   key={index} className="list-item">
            <div className="list-item">
            <Movie movie={movie} onMovieClick={onMovieClick} list1={list1} list2={list2} list3={list3}/>
            </div>
            </li>
        )
    })
    const curatedList2 = list2.map((movie, index) => {
        return (
            
            <li key={index} className="list-item">
            <div className="list-item">
            <Movie movie={movie} onMovieClick={onMovieClick} list1={list1} list2={list2} list3={list3}/>
            </div>
            </li>
        )
    })
    const curatedList3 = list3.map((movie, index) => {
        return (
            
            <li key={index} className="list-item">
            <div class="list-item">
            <Movie movie={movie} onMovieClick={onMovieClick} list1={list1} list2={list2} list3={list3}/>
            </div>
            </li>
        )
    })
    const setUserView = () => {
        // console.log("test");
        handleViewChange();
    }
        if(viewUserLists){
            return(
                <>
                <br></br><br></br><br></br>
                <button class="user-button" onClick={setUserView}>User view</button>
                <h2>Favourite Movies</h2>
                <ul>{curatedList1}</ul>
                <h2>Watch Later</h2>
                <ul>{curatedList2}</ul>
                <h2>Watch with the Kids</h2>
                <ul>{curatedList3}</ul>
                </> 
            )
        } else {
            return(
                <>
                <br></br><br></br><br></br>
                <button class="user-button" onClick={setUserView}>My List</button>
                <h2>Recommended</h2>
                <ul>{curatedList1}</ul>
                <h2>Recently Added</h2>
                <ul>{curatedList2}</ul>
                <h2>Family Friendly</h2>
                <ul>{curatedList3}</ul>
                </> 
            )
        }
    }
export default CuratedList;
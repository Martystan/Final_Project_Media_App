import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import "./css/Nav.css";
import SearchBar from './SearchBar';
import "./css/SearchBar.css"
import MovieSource from './MovieSource'
import Request from '../helpers/request';


function Nav(props) {
    const [show, handleShow] = useState(false);
    const [searchedMovie, setSearchMovie] = useState(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    const onSearch= async(text) => {

        const request = new  Request(); 
        request.get("/api/movieLists/search/"+text)
        .then(response => props.onSearchMovie(response))
    
    } 


      
    return (
        <div id = "nav">
        
        <img  src = {require("./getflix3.png").default}></img>
        
        
        {/* <a className="nav_myLists" href="/MyLists">My Lists</a> */}
        <div className="SerchBar" id="SerchBar"> <SearchBar  onSearch={onSearch}/></div>
        </div>
        
        // <div className={`nav ${show && "nav_background"}`}>
        //     <img
        //         className="nav_logo"
        //         src="https://i.postimg.cc/15T5z2h2/Getflix3.png"
        //         alt="Getflix Logo"
        //     />

        //     {/*  */}
        //        
        
        //     
          

        //     {/* <a className="nav_myLists" href="/MyLists">My Lists</a> */}

        //     <img
        //         className="nav_avatar"
        //         src="https://i.postimg.cc/VNXjgXWs/Getflix-User.png"
        //         alt="Getflix Avatar"
        //     />
        // </div>
    )
    
}

export default Nav;

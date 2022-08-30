import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "./HomePage";
import Search from "./Search";
import Liked from "./Liked";
import styled from "styled-components";
// import InputSearch from "./InputSearch";
// import Navbar from "./Navbar";

function NavPage(){
    return(
        <Container>
            {/* <div className="navbar__content"></div> */}
            {/* <div className="navigation__bar">
            
            </div> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Liked"  element={<Liked />}  />
            </Routes>
        </Container>
    )
}

const Container=styled.div`
    width:100%;
`
export default NavPage;
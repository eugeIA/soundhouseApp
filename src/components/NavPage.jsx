import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "./HomePage";
import Search from "./Search";
import styled from "styled-components";

function NavPage(){
    return(
        <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Search" element={<Search />} />
            </Routes>
        </Container>
    )
}

const Container=styled.div`
    width:100%;
`
export default NavPage;
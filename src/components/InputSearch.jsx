import React from "react";
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";
import PropTypes from 'prop-types';


function InputSearch({setSearchInput}){
    return(
        <Container>
          <div className="searchBar">
            <IoSearch />
            <input
                type="search"
                className="bar__de__recherche"
                //    onKeyPress={(e)=>}
                onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
            
         
        </Container>
    )
}

InputSearch.propTypes = {
    setSearchInput:PropTypes.string.isRequired,
  }
  


const Container=styled.div`
    
`

export default InputSearch;
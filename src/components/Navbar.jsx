import React from "react";
import styled from "styled-components";
// import Search from "./Search";
import {IoPersonCircleOutline,IoSearch} from "react-icons/io5";
import { useStateProvider } from "../utils/StateProvider";

function Navbar(){
  const [{ userInfo }] = useStateProvider();
  return(
    <Container>
      <h2 className="app_title">
        <span className="sound">Sound</span>House
      </h2>
      <div className="home__page__search__bar">
        <IoSearch />
        <input
          type="search"
          className="bar__de__recherche"
        />
        {/* <Search /> */}
      </div>
      <div className="name_user">
          <IoPersonCircleOutline />
          <div className="username">{userInfo?.username}</div>
      </div>
    </Container>
  )
}

const Container=styled.div`
   display:flex;
   justify-content:space-between;
   h2 {
    align-self:center;
    margin-top: -0.3px;
    margin-left:20px;
    color: #08033f ;
    .sound {
      color: #f0260f;
    }
  }
  .home__page__search__bar {
    display: flex;
   
    gap: 10px;
    padding: 15px 5px;
    height:1.5vh;
    background-color: #f7f7fb;
    border-radius: 50px;
    width: 45%;
    margin-left:-150px;
    svg {
      color: black;
    }
    .bar__de__recherche {
      background-color: #f7f7fb;
      border: none;
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }
  .name_user{
    display:flex;
    margin-right:55px;
    padding-top:10px;
    gap:2px;
    svg{
      padding-top:3.5px;
      font-size:larger;
    }
    .username{
      font-size:larger;
    }
  }

`

export default Navbar;
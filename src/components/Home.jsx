import React, { useEffect} from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

import SidebarL from "./SidebarL";
import Player from "./Player";
// import HomePage from "./HomePage";
import styled from "styled-components";
import Artists from "./Artists";
import NavPage from "./NavPage";
import Navbar from "./Navbar";
import Playlist from "./Playlist"

function Home() {
  const [{ token,track }, dispatch] = useStateProvider();
  console.log(track);


  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      const userInfo = {
        userId: data.id,
        username: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [token, dispatch]);
  useEffect(() => {
    const getPlaybackState = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: data.is_playing,
      });
    };
    getPlaybackState();
  }, [dispatch, token]);
  return (
    <Container>
      <div className="navigation__bar">
      <Navbar/>
      </div>
      <div className="main__part__home">
        <div className="home_body">
          <div className="home_body_sidebarLeft">
            <SidebarL />
            <div className="playlists__block">
               <Playlist />
            </div>
          </div>
          <div className="home_body_center">
            <NavPage />
          </div>
        </div>
        <div className="home_body_sidebarRight">
          <Artists />
        </div>
      </div>

      <div className="footer">
        <Player />
      </div>
     
      
    </Container>
  );
}

const Container = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  .navigation__bar{
    height:7.5vh;
    padding:10px 10px;
  }
  .main__part__home{
    padding-top:-1vh;
    display:flex;
    height:80vh;
    width:100%;
    .home_body{
      display:flex;
      width:75%;
      .home_body_center {
        width: 75%;
        height: 80vh;
        overflow-x:hidden;
        overflow-y: scroll;
  
        ::-webkit-scrollbar {
          width: 5px;
        }
  
        ::-webkit-scrollbar-track {
          background: white;
        }
  
        ::-webkit-scrollbar-thumb {
          background:  #f4f3fb ;
          border-radius: 1px;
        }
  
        ::-webkit-scrollbar-thumb:hover {
          background:  #f4f3fb ;
        }
      }
      .home_body_sidebarLeft {
        background-color:  white;
        width: 25%;
        padding-top: 35px;
        overflow-x:hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          width: 5px;
        }
  
        ::-webkit-scrollbar-track {
          background: white;
        }
  
        ::-webkit-scrollbar-thumb {
          background:  #f4f3fb ;
          border-radius: 10px;
        }
  
        ::-webkit-scrollbar-thumb:hover {
          background:  #f4f3fb ;
        }
        .playlists__block{
          margin-top:50px;
          padding-left:15px;
        }
        
      }   
    }
    .home_body_sidebarRight {
        width: 25%;
        height:85vh;
        padding-top: 20px;
        
        
      }
  }
 .footer{
     
     width:100%;
   
     margin-top:0.1vh;
  }

`;

export default Home;

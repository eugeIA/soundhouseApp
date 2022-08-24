import React, { useEffect} from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

import SidebarL from "./SidebarL";
import Player from "./Player";
// import HomePage from "./HomePage";
import styled from "styled-components";
import Playlist from "./Playlist";
import NavPage from "./NavPage";

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
  return (
    <Container>
      
      <div className="main__part__home">
        <div className="home_body">
          <div className="home_body_sidebarLeft">
            <SidebarL />
          </div>
          <div className="home_body_center">
            <NavPage />
          </div>
        </div>
        <div className="home_body_sidebarRight">
          <Playlist />
        </div>
      </div>

      <div className="footer">
        <Player />
      </div>
     
      
    </Container>
  );
}

const Container = styled.div`
  height:10vh;
  width:100%;
  display:flex;
  flex-direction:column;
  .main__part__home{
    display:flex;
    height:75vh;
    width:100%;
    .home_body{
      display:flex;
      width:75%;
      .home_body_center {
            width: 75%;
            height: 100vh;
            overflow: scroll;
      
            ::-webkit-scrollbar {
              width: 10px;
            }
      
            ::-webkit-scrollbar-track {
              background: white;
            }
      
            ::-webkit-scrollbar-thumb {
              background: #f0260f;
              border-radius: 1px;
            }
      
            ::-webkit-scrollbar-thumb:hover {
              background: #f0260f;
            }
          }
          .home_body_sidebarLeft {
            background-color:  #f6fffe ;
            width: 25%;
            padding-top: 35px;
            height:85vh;
          }   
    }
    .home_body_sidebarRight {
        width: 25%;
        height:90vh;
        padding-top: 35px;
        
        background-color:#f6fffe;
        overflow: scroll;
        ::-webkit-scrollbar {
          width: 2px;
        }
  
        ::-webkit-scrollbar-track {
          background: white;
        }
  
        ::-webkit-scrollbar-thumb {
          background: #f0260f;
          border-radius: 10px;
        }
  
        ::-webkit-scrollbar-thumb:hover {
          background: #f0260f;
        }
      }
  }
  .footer{
     margin-top:15vh;
     width:100%;
     height:10vh;
  }

`;

export default Home;

import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import {IoPlaySharp} from "react-icons/io5"

function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/users/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
       
        return { name, id};
      });
      console.log(playlists)
      console.log(response);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
    <Container>
      <h3>My playlists</h3>
      <ul>
        {playlists.map(({ name, id}) => {
          return <li key={id} 
                     onClick={() => changeCurrentPlaylist(id)}
                     className="playlist__item">
                      <IoPlaySharp />
                   <span>{name}</span>
                   <div></div>
                 </li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  background-color:#f6fffe;
  margin-left:5px;
  h3{
     text-align: center;
     color:#08033f;
  }
  ul {
    list-style-type: none;
    padding:5px;
    display:flex;
    flex-direction:column;
    gap:5px;
    margin-top:-5px;
    li{
      display:flex;
      background-color:white;
      padding:10px 5px;
      cursor:pointer;
      border-radius:10px;
      svg{
        display:none;
      }
      span{
        font-size:smaller;
      }
    }
    li:hover{
      background-color:#08033f;
      color:white;
      border-radius:10px;
      svg{
        display:block;
        color:#f0260f;
      }
    }
  }
`;
export default Playlist;


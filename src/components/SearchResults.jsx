import React,{useEffect,useState} from "react";
import { useStateProvider } from "../utils/StateProvider";

import { reducerCases } from "../utils/Constants";

import SidebarL from "./SidebarL";
import Player from "./Player";
// import HomePage from "./HomePage";
import styled from "styled-components";
import Artists from "./Artists";
// import NavPage from "./NavPage";
import {IoPersonCircleOutline,IoSearch} from "react-icons/io5"
// import Navbar from "./Navbar";
import Playlist from "./Playlist"
// import Search from "./Search";

function SearchResults() {
const [{ userInfo }] = useStateProvider();
  
const [searchInput, setSearchInput] = useState("");
  const [{ token,songs }, dispatch] = useStateProvider();
  const [albums, setAlbums] = useState([]);
   console.log(setSearchInput)
  // const spotifyApi=new SpotifyWebApi({clientId:"4c73eec8758b4686ad313c2f504b9c75"})
  useEffect(() => {
    const search = async () => {
      const searchparams = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      };
      let getArtistId = await fetch(
        "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
        searchparams
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data.artists.items[0].id
        });
      let getAlbums = await fetch(
        "https://api.spotify.com/v1/artists/" + getArtistId + "/albums" + "?include_groups=album&market=CA",
        searchparams
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAlbums(data.items);
        });
      
        
        
      console.log(getAlbums);
     
      
      let songs=[...albums];
      dispatch({ type: reducerCases.SET_SEARCH, songs });
    };
    search();
  }, [token, searchInput, dispatch]);
  console.log(albums);


  
  return (
    <Container>
      <div className="navigation__bar">
        <h2 className="app_title">
            <span className="sound">Sound</span>House
        </h2>
        <div className="home__page__search__bar">
            <IoSearch />
            <input
            type="search"
            className="bar__de__recherche"
            value={searchInput}
            //   onClick={handleClick}
            onChange={(e) => setSearchInput(e.target.value)}
            />
            {/* <Search /> */}
        </div>
        <div className="name_user">
            <IoPersonCircleOutline />
            <div className="username">{userInfo?.username}</div>
        </div>
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
            <div className="search__result__body">
            {songs.map((album) => {
            return (
                <div key={album.id} className="search__results__cart">
                <img src={album.images[2].url} alt="" className="albums__image" />
                <div className="album__description">
                    <h6 className="result__title">{album.name}</h6>
                    <h6 className="parution__date">{album.release_date}</h6>
                </div>
                
                </div>
            );
            })}
           </div>
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

export default SearchResults;

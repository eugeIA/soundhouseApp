import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
// import { IoSearch } from "react-icons/io5";
// import SpotifyWebApi from "spotify-web-api-node";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [{ token }, dispatch] = useStateProvider();
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
     
      

      dispatch({ type: reducerCases.SET_SEARCH, albums });
    };
    search();
  }, [token, searchInput, dispatch]);
  console.log(albums);

  return (
    <Container>
      {/* <div className="search__bar">
        <IoSearch />
        <input
          type="search"
          className="bar__de__recherche"
          //    onKeyPress={(e)=>}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div> */}
      <div className="search__result__body">
        {albums.map((album) => {
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
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 27px;
  .search__bar {
    display: flex;
    gap: 10px;
    padding: 15px 5px;
    background-color: #f7f7fb;
    border-radius: 50px;
    width: 80%;
    svg {
      color: black;
    }
    input {
      background-color: #f7f7fb;
      border: none;
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }
  .search__result__body {
    padding-top:15px;
    padding-right:5px;
    padding-left:-1px;
    display:grid;
    grid-template-columns: auto auto auto auto;
    width:100%;
    gap:15px;
    
    .search__results__cart{
        display:flex;
        flex-direction:column;
        gap:5px;
        cursor:pointer;
       .album__description{
          display: flex;
          flex-direction:column;
          justify-content:center;
          .parution__date{
            margin-top:-20px;
          }
       }
    }
    
  }
`;

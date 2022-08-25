import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { IoSearch } from "react-icons/io5";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [{ token }, dispatch] = useStateProvider();
  const [albums, setAlbums] = useState([]);

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
          return data.artists.items[0].id;
        });
      let getAlbums = await fetch(
        "https://api.spotify.com/v1/artists/" + getArtistId + "/albums",
        searchparams
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAlbums(data.items);
        });
      let getTracks=await fetch(
          "https://api.spotify.com/v1/artists/"+ getArtistId + "/top-tracks" +"BR",searchparams
      ) 
       .then((response) => response.json())
       .then (data=>console.log(data))
      console.log(getAlbums);
      console.log(getTracks)
      

      dispatch({ type: reducerCases.SET_SEARCH, albums });
    };
    search();
  }, [token, searchInput, dispatch]);
  console.log(albums);

  return (
    <Container>
      <div className="search__bar">
        <IoSearch />
        <input
          type="search"
          className="bar__de__recherche"
          //    onKeyPress={(e)=>}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="search__result__body">
        {albums.map((album) => {
          return (
            <div key={album.id}>
              <img src={album.images[2].url} alt="" className="albums__image" />
              <h6 className="result__title">{album.name}</h6>
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
    padding-top: 15px;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;

    div {
    }
  }
`;

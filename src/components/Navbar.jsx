import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
// import Search from "./Search";
import SpotifyWebApi from "spotify-web-api-node";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { useStateProvider } from "../utils/StateProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [{ userInfo }] = useStateProvider();
  const [searchInput, setSearchInput] = useState("");
  const [{ token, tracks }, dispatch] = useStateProvider();
  const spotifyApi = new SpotifyWebApi();
  console.log(tracks);

  console.log(setSearchInput);
  // const spotifyApi=new SpotifyWebApi({clientId:"4c73eec8758b4686ad313c2f504b9c75"})
  useEffect(() => {
    // const search = async () => {
    //   const searchparams = {
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer " + token,
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   let getArtistId = await fetch(
    //     "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
    //     searchparams
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       return data.artists.items[0].id;
    //     });
    //   fetch(
    //     "https://api.spotify.com/v1/artists/" +
    //       getArtistId +
    //       "/albums" +
    //       "?include_groups=album&market=CA",
    //     searchparams
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       dispatch({ type: reducerCases.SET_SEARCH, albums: data.items });
    //     });

    // };
    // search();
    const search = async () => {
      spotifyApi.setAccessToken(token);
      spotifyApi
        .searchTracks(searchInput)

        .then((data) => {
          console.log("Data albums ", data)
          dispatch({ type: reducerCases.SET_SEARCH, tracks: data.body.tracks.items });
        });
    };
    search();
  }, [token, searchInput, dispatch]);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/Search");
  }
  return (
    <Container>
      <h2 className="app_title">
        <span className="sound">Sound</span>House
      </h2>
      <div className="home__page__search__bar">
        <IoSearch />
        <input
          type="search"
          className="bar__de__recherche"
          onClick={handleClick}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* <Search /> */}
      </div>
      <div className="name_user">
        <IoPersonCircleOutline />
        <div className="username">{userInfo?.username}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    align-self: center;
    margin-top: -0.3px;
    margin-left: 20px;
    color: #08033f;
    .sound {
      color: #f0260f;
    }
  }
  .home__page__search__bar {
    display: flex;

    gap: 10px;
    padding: 15px 5px;
    height: 1.5vh;
    background-color: #f7f7fb;
    border-radius: 50px;
    width: 45%;
    margin-left: -125px;
    svg {
      color: black;
      align-self: center;
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
  .name_user {
    display: flex;
    margin-right: 55px;
    padding-top: 10px;
    gap: 2px;
    svg {
      padding-top: 3.5px;
      font-size: larger;
    }
    .username {
      font-size: larger;
    }
  }
`;

export default Navbar;

import React,{useEffect} from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

import { reducerCases } from "../utils/Constants";

function HomePage() {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };

      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, selectedPlaylistId, dispatch]);

  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      const currentPlaying = {
        id,
        name,
        artists,
        image,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    }
  };

  const msToMinutesAndSecons = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <Container>
      <h2 className="homePage__title">Home</h2>
      <div className="image">
          <img src={selectedPlaylist.image} alt="selectedplaylist" />
      </div>
      </div>
      <div className="top_track">
        <h3>Recently played</h3>
        {selectedPlaylist && (
        <>
          
          <div className="list">
            
              <div className="col">
                <span>Artist</span>
              </div>
            </div>
            <div className="tracks">
              {selectedPlaylist.tracks.map(
                ({ id, name, artists, image, duration, album,context_uri,
                  track_number }) => {
                  return (
                    <div className="row" 
                          key={id}
                          onClick={() =>
                            playTrack(
                              id,
                              name,
                              artists,
                              image,
                              context_uri,
                              track_number
                            )
                          }>
                      <div className="col">
                        <span>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          <img src={image} alt="track" />
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          <span>{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{album}</span>
                      </div>
                      <div className="col">
                        <span>{msToMinutesAndSecons(duration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left:10px;
  padding-top:25px;
  .top_track{
    display: grid;
    grid-template-columns: auto auto auto ;
  }
  .homePage__title{
    color:#08033f;
  }
  .home__cart {
    display: flex;
    height:30vh;
    padding-top:25px;
    padding-left:10px;
    padding-bottom:25px;
    justify-content: space-between;
    background: #d9d9d933;
    color:#08033f;
    border-radius:20px;
    homepage_cart_picture{
      height:30vh;
      img{
        height:30vh;
      }
    }
  }
`;

export default HomePage;


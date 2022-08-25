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
          image: track.album.images[1].url,
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
      const currentlyPlaying = {
        id,
        name,
        artists,
        image,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
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
      {/* <div className="image">
          <img src={selectedPlaylist.image} alt="selectedplaylist" />
      </div> */}
      
      <div className="top_track">
        <h3>My favorites</h3>
        {selectedPlaylist && (
        <>
          
          <div className="list">
            
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
                      
                      <div className="col__detail">
                        <div className="image">
                          <img src={image} alt="track" />
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          <span className="artist__name">({album})</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>{artists}</span>
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
    h3{
      color:#08033f;
    }
    .list{
      .tracks{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:25px;
       
        .row{
          text-align:left;
          padding-left:2.5px;
          padding-right:2.5px;
          padding-top:10px;
          cursor:pointer;
          font-size:smaller;
          .col__detail{
            .info{
               .name{
                 font-weight:bold;
                 font-size:small;
                 margin-right:1px;
               }
               .artist__name{

               }
            }
          }

        }
        .row:hover{
          background-color:#f0260f;
          border-radius:5px;
          color:white;
          padding:10px 10px;
        }
      }
    }
  }
  .homePage__title{
    color:#08033f;
  }
  
  
`;

export default HomePage;


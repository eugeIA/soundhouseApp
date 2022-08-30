import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import {IoHeartSharp} from "react-icons/io5"
import axios from "axios";

function Liked(){
    const[{token,top_items,uri},dispatch]=useStateProvider();

    useEffect(()=>{
        const getTopTracks = async () => {
            const response = await axios.get(
              "https://api.spotify.com/v1/me/top/tracks",
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
              }
            );
            const { items } = response.data;
            const top_items = items.map(({id, name, album, duration_ms, uri }) => {
                let image = []
                if(album){
                    const {images} = album
                    image = [...images]}
              return {id, name, image, duration_ms, uri};
            });
            dispatch({ type: reducerCases.SET_LIKEDURI, uri })
            dispatch({ type: reducerCases.SET_TOP_ITEMS, top_items })
            // console.log(playlists)
            console.log(response.data);
            // dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
          };
          getTopTracks();
    }
    ,[token,top_items,uri,dispatch])

    const times = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

    return(
        <Container>
           {top_items.map(({id, name, image, duration_ms, uri}) => {
          return <div key={id} 
                     onClick={() => {dispatch({ type: reducerCases.SET_LIKEDURI, uri })}}
                     className="playlist__item">
                    <div className="liked_item_image"><img src={image[2].url} alt="track" /></div>
                    <div className="song__description">
                        <span>{name}</span>
                        <div>{times(duration_ms)}</div>
                    </div>
                    <div className="heart">
                      <IoHeartSharp />
                    </div>
                    
                 </div>;
        })}
        </Container>
    )
}


const Container=styled.div`
     display:flex;
     flex-direction:column;
     padding-left:15px;
     padding-right:15px;
    .playlist__item{
      display:flex;
      margin-top:10px;
      .song__description{
        padding-right:20px;
        flex-grow:3;
        align-self:center;
        span{
          font-size:small;
          text-align:center;
          margin-left:10px;
        }
        div{
          font-size:small;
          margin-left:10px;
        }
      }
      .liked__item__image{
        img{
          height:10vh;
          width:10vw;
        }
      }
      .heart{
        align-self:center;
        margin-left:1vw;
      }
    }

`

export default Liked;
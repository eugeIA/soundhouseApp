import React from "react";
import styled from "styled-components";
import sia from "../assets/sia.jpg";
import eminem from "../assets/eminem.jpg";
import maroon from "../assets/maroon.jpg"
import ed_sheeran from "../assets/ed_sheeran.jpg"
// import axios from "axios";
// import { useStateProvider } from "../utils/StateProvider";

function Artists(){
    // const [{token},dispatch]=useStateProvider();
    // useEffect(()=>{
    //     const getArtist = async () => {
    //         const response = await axios.get(
    //           "https://api.spotify.com/v1/browse/categories",
    //           {
    //             headers: {
    //               Authorization: "Bearer " + token,
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         );
    //         // const { items } = response.data;
    //         // const playlists = items.map(({ name, id, images }) => {
             
    //         //   return { name, id, images};
    //         // });
    //         // console.log(playlists)
    //         console.log(response.data);
    //         // dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    //       };
    //       getArtist();
    // },[token,dispatch])
    return(
        <Container>
          
            <h3 className="artists__bar__title">Popular artists</h3>
            
            
            <ul className="top__artists__list">
                <li>
                    <img src={ed_sheeran} alt="" />
                    <div className="description">
                        <h3>Ed Sheeran</h3>
                        <p>200 Millions followers</p>
                    </div>
                </li>
                <li>
                    <img src={sia} alt="" />
                    <div className="description">
                        <h3>Sia fulter</h3>
                        <p>195 Millions followers</p>
                    </div>
                </li>
                <li>
                    <img src={eminem} alt="" />
                    <div className="description">
                        <h3>Eminem</h3>
                        <p>150 Millions followers</p>
                    </div>
                </li>
                <li>
                    <img src={maroon} alt="" />
                    <div className="description">
                        <h3>Maroon 5</h3>
                        <p>1250 Millions followers</p>
                    </div>
                </li>
            </ul>
            
        </Container>
    )
}


const Container=styled.div`
     .artists__bar__title{
        margin-bottom:30px;
        text-align:center;
     }
     .top__artists__list{
        list-style-type: none;
        
        li{
           display:flex;
           margin-top:10px;
           img{
            height:10vh;
            border-radius:50px;
           }
           .description{
              padding-left:15px;
              h3{
                font-size:small;
              }
              p{
                font-size:smaller;
                margin-top:-5px;
              }
           }
        }
     }

`

export default Artists;
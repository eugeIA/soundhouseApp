import React from "react";
import styled from "styled-components";


export default function Login() {
  const handleClick = () => {
    const clientId = "4c73eec8758b4686ad313c2f504b9c75";
    const redirectUrl = "http://localhost:3001/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };
  return (
    <Container>
      <div className="soundhouse_first_page">
          <h1 className="soundhouse_first_page_title"><span>Sound</span>House</h1>
          <h3 className="soundhouse_first_page_subtitle">Yes, we play music</h3>
          <button
            onClick={handleClick}
            className="soundhouse_first_page_login_button"
          >
            Login with spotify
          </button>
    </div>
    </Container>
    
  );
}
 
const Container=styled.div`
    background-image:url(" href='https://fr.freepik.com/vecteurs/fond-pastel'>Fond pastel vecteur créé par Hello-Pixel - fr.freepik.com");
    padding-top:35vh;
    text-align:center;
    .soundhouse_first_page{
      .soundhouse_first_page_title{
        color: #08033f ;
        font-size:300%;
        span {
          color: #f0260f;
        }
      }
      button{
        padding:10px 5px;
        background-color:#f0260f;
        border-radius:50px;
        color:white;
        border-color:#f0260f;
        cursor:pointer;
        font-size:large;
      }
      
      h3{
        
        color:#08033f;
        font-size:150%;
      }
    }
    
`
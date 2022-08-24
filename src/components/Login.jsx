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
        Login
      </button>
    </div>
    </Container>
    
  );
}
 
const Container=styled.div`
   
    background-position:center;
    background-cover:center center;
    text-align:center;
    .soundhouse_first_page{
      button{
        padding:10px 5px;
        background-color:
      }
      h1 {
        
        color: black ;
        .sound {
          color: #f0260f;
        }
      }
      h3{
        color:black;
      }
    }
    
`
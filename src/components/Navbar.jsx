//display:block;
  // .corps__du__app{
  //   height:100vh;
  //   display:flex;
  //   flex-direction:column
  //   .main__part__home{
  //     display:flex;
  //     height:90vh;
  //     width:100%;
  //     .home_body {
  //       display: flex;
  //       width: 80%;
  //       height:100vh;
  //       .home_body_center {
  //         width: 60%;
  //         height: 100vh;
  //         overflow: scroll;
    
  //         ::-webkit-scrollbar {
  //           width: 10px;
  //         }
    
  //         ::-webkit-scrollbar-track {
  //           background: white;
  //         }
    
  //         ::-webkit-scrollbar-thumb {
  //           background: #f0260f;
  //           border-radius: 1px;
  //         }
    
  //         ::-webkit-scrollbar-thumb:hover {
  //           background: #f0260f;
  //         }
  //       }
  //       .home_body_sidebarLeft {
  //         background-color:  #f6fffe ;
  //         width: 35%;
  //         padding-top: 35px;
  //       }
        
  //     }
  //     .home_body_sidebarRight {
  //       width: 20%;
  //       height:100vh;
  //       padding-top: 35px;
        
  //       background-color:#f6fffe;
  //       overflow: scroll;
  //       ::-webkit-scrollbar {
  //         width: 2px;
  //       }
  
  //       ::-webkit-scrollbar-track {
  //         background: white;
  //       }
  
  //       ::-webkit-scrollbar-thumb {
  //         background: #f0260f;
  //         border-radius: 10px;
  //       }
  
  //       ::-webkit-scrollbar-thumb:hover {
  //         background: #f0260f;
  //       }
  //     }
  //   }
    
  //   .footer {
  //     height: 20%;
  //     display: flex; 
  //   }
  // }
  



// import React from "react";
// import styled from "styled-components";
// import CurrentTrack from "./CurrentTrack";

// import PlayerController from "./PlayerController";
// import Volume from "./Volume";
// function Player() {
//   return (
//     <Container>
//       <CurrentTrack />
//       <PlayerController />
//       <Volume />
//     </Container>
//   );
// }

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #181818;
//   border-top: 1px solid #282828;
//   display: grid;
//   grid-template-columns: 1fr 2fr 1fr;
//   align-items: center;
//   justify-content: center;
//   padding: 0 1rem;
// `;

// export default Player;


import React from "react";
import styled from "styled-components";
// import CurrentTrack from "./CurrentTrack";
// import PlayController from "./PlayController";
import SpotifyPlayer from 'react-spotify-web-playback';



function Player() {
 
  return (
    <Container>
      <SpotifyPlayer 
       styles = { { 
        activeColor : '#fff' , 
        bgColor : '#333' , 
        color : '#fff' , 
        loaderColor : '#fff' , 
        sliderColor : '#1cb954' , 
        trackArtistColor : '# ccc' , 
        trackNameColor : '#fff' , 
      } } 
      token="BQAIxO5ZRA_AgpUEmQrcD-OZH4UMmr66EMYP5QycEa1X6TgGnM_7u_LxJ7_ho5pXWYvchapE6Ort3SY90o5LZ4Hf-Q4911a2URB_L5tWdx0YyicBDxP94TnrWaDv20aRO5SBTm4vSqCQf24fQd61HNcPJtyhyOvWXwkQ6kjfkjQZtL6VDaQl7Qks0EHbYQrB7HvoXRNR5kf2SWa0zneoKRRRrTpybnxqyisSeB--5KUJsv1Z3x9ErrIuxtqzIcl_QVZ0rYtbhw
      coche_blanche
      yeux
      alléluia
      Réagir
      Répondre"
      uris={['spotify:track:1j4kHkkpqZRBwE0A4CN4Yv']}
      />
    
    </Container>
  );
}

export default Player;

const Container = styled.div`
  display: flex;
  width:100%;
  background-color: white;
  height: 100%;
`;
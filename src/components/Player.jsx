
import React, { useEffect } from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../utils/StateProvider";
import {reducerCases} from "../utils/Constants"
function Player() {
  const[{token,contextUri},dispatch]=useStateProvider();
  useEffect(()=>{
    dispatch(
      {
        type: reducerCases.SET_CONTEXTURI, contextUri
      },
      
    )
  },[token,dispatch]

  
  )
  
  return (
    // <Container>
    //   <CurrentTrack />
    //   <PlayerController />
    //   <Volume />
    // </Container>
    <Container>
      <SpotifyPlayer 
       className="web__playback"
       styles = { { 
        activeColor : '#fff' , 
        bgColor : 'black' , 
        color : '#fff' , 
        loaderColor : '#fff' , 
        sliderColor : '#1cb954' , 
        trackArtistColor : '# ccc' , 
        trackNameColor : 'black' , 
        
      } } 
      token={"BQA0C5tTeq4EwOA55KrIP6YJve6FtgT_H8nne2Shi9F1muzWG1bKO9FDl094Y1nGfJp-owrWhJA4AgHDlqmleWVxBOZovlTUkhy40AIOgbTBnXy95nmyMwrkyW6ilLox69CpqP89kBPmJxT2-60Xro1qC9x66387YyZVMxdaveu-QWN6HukDkOPUiHpFOTmcKoUzI4j_2nWAcgfMJpOx2lQMrMRE7bc0z_KH_WFzoQeQUwLDCJPngGsUkZ_-TJsqIhmZA1oigEv9FjayDy9y19gCsq9GIrJgFGL7xeGq3FPvVeK1P0sXd4-ztAzLMsgyDrfQ-BbvZ6lumYtOlJw"}
      uris={[`${contextUri}`]}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 8vh;
  
  .web__playback{
    width:100%;
    height:100%;
  }
`;

export default Player;
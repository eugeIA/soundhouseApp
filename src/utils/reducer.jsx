import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  selectedPlaylistId: "55pbXnjvBIkyey3BI6aDlz",
  selectedPlaylist: null,
  currentlyPlaying: null,
  playerState: false,
  track:[],
  top_items:[],
  
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState,
      };
    }
    
    case reducerCases.SET_RECENTPLAY:{
      return{
        ...state,
        track:action.track,
      }
    }
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    case reducerCases.SET_CONTEXTURI:
      return {
        ...state,
        contextUri: action.contextUri,
      };
    case reducerCases.SET_LIKEDURI:
      return{
        ...state,
        uri:action.uri,
      };
    case reducerCases.SET_TOP_ITEMS:
      return{
        ...state,
        top_items:action.top_items,
      }
    default:
      return state;
  }
};

export default reducer;

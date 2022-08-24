import React, { useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import {BrowserRouter} from "react-router-dom";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <BrowserRouter><Home /></BrowserRouter> : <Login />}</div>;
}
export default App;

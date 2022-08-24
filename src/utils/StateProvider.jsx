import { createContext, useContext, useReducer } from "react";
import PropTypes from 'prop-types';
import React from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


StateProvider.propTypes = {
  children: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  reducer: PropTypes.string.isRequired,
}

export const useStateProvider = () => useContext(StateContext);

import React from "react";
import styled from "styled-components";
import {SidebarData} from '../data/SidebarData'
import {NavLink} from 'react-router-dom'
import { useStateProvider } from "../utils/StateProvider";
import {IoPersonCircleOutline} from "react-icons/io5"


function SidebarL() {
  const [{ userInfo }] = useStateProvider();
  return (
    <Container>
      <h1 className="app_title">
        <span className="sound">Sound</span>House
      </h1>
      <div className="sidebar__body">
        {
          SidebarData.map((item,index)=>{
            return(
              <div key={index}>
                <NavLink 
                 to={item.path} 
                 className="links"
                 style={({ isActive }) => ({
                  color: isActive ? '#f0260f' : ' #08033f ',
                  
                })}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              </div>
            )
          })
        }
      </div>
      
      <div className="name_user">
          <IoPersonCircleOutline />
          <div>{userInfo?.username}</div>
      </div>
      
    </Container>
  );
}

const Container = styled.div`
    width:100%;
    padding-left:10px;
    h1 {
      margin-top: -0.4px;
      color: #08033f ;
      .sound {
        color: #f0260f;
      }
    }
    .sidebar__body{
      margin-top:35px;
     
      div{
       
        .links{
          display:flex;
          gap:10px;
          cursor:pointer;
          text-decoration:none;
          font-size:larger;
        }
      }
    }
    .name_user{
      display:flex;
      margin-top:50vh;
      gap:2px;
      svg{
        font-size:large;
      }
    }

`;

export default SidebarL;

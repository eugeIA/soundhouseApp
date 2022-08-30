import {
    IoHeart,
  IoHomeSharp,
  IoSearchSharp,

}from "react-icons/io5"
import React from "react"


export const SidebarData=[
    {
        title:"Home",
        path:"/",
        icon:<IoHomeSharp />,
        
    },
    {
        title:"Search",
        path:"/Search",
        icon:<IoSearchSharp />
        
    },
    {
        title:"Liked",
        path:"/Liked",
        icon:<IoHeart />
    }
    
]
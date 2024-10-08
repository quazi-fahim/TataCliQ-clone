import React, { useState } from 'react'

export const useSlider = (initdata,slidtoshow=4) => {
    const[currentindex,setcurrentindex]=useState(0);
    const totalitems=initdata.length;
    const nextslide=()=>{
        setcurrentindex((previndex)=>(previndex+1)%totalitems);
    }
const prevslide=()=>{
    setcurrentindex((previndex)=>(previndex-1  +totalitems)%totalitems)
}
const currentslide=[];
for(let i=0;i<slidtoshow;i++){
    currentslide.push(initdata[(currentindex+i)%totalitems])
}
  return {
   currentslide,
    nextslide,
    prevslide,
    currentindex,
    totalitems

  }
}


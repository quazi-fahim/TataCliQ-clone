import React, { useEffect } from 'react'
import {Outlet,Navigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { checkauth } from '../Redux/Privateroutrs/actions';
const Privateroutes = () => {
  const dispatch=useDispatch();
  const isAuth=useSelector((state)=>state.auth.isAuth)

  useEffect(()=>{
    checkauth()
  },[dispatch])


  
    return isAuth?<Outlet/>:<Navigate to="/signin"/>
  
}

export default Privateroutes
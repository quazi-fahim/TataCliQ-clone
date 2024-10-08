import axios from "axios";
export const Check_AUTH="CHECK_AUTH"







export const checkauth=()=>{
    return async (dispatch)=>{
   
    try{
   // Check if the user already exists
   const res= await axios.get("http://localhost:3000/users");
   const isAuth=res.data.length>0
   dispatch({
            type:"CHECK_AUTH",
            payload:isAuth,
        })
    }
    
    catch (error){
        console.log(error,"failed")
        dispatch({ type:"CHECK_AUTH",
                        payload:false})
    };
}
}


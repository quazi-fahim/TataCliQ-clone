 
 
 
 const initstate={
isAuth:null
 };
 export const Authreducer=(state=initstate,{type,payload})=>{
    switch(type){
        case "CHECK_AUTH":
            return{
                ...state,isAuth:payload
            }
            default:
                return state
    }
 }
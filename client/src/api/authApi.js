import { useContext, useEffect, useRef } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {
    
    // const abortRef = useRef(new AbortController())

    const login = async (email,password) =>{
        return request.post(
            `${baseUrl}/login`, 
            {email,password}, 
            // {signal: abortRef.current.signal}
        );

        
    }

    // useEffect(()=>{
    //     const abortController = abortRef.current;

      

    //     return ()=>abortController.abort()
    // },[])


    return{
        login
    }
}

export const useRegister = () => {

    const register = async (email,password)=>{
        return request.post(`${baseUrl}/register`,{email,password})
    }

    return{
        register
    }

}

export const useLogout = () => {
    const {accessToken, userLogoutHandler} = useContext(UserContext);

    console.log(accessToken);

    useEffect(()=>{
        
        if(!accessToken){
            return
        }

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
        .then(userLogoutHandler)
    
    },[accessToken])
    

    return {
        isLoggedOut: !!accessToken,
    }

}
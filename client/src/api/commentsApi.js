import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';


export const useComments = (gameId) =>{

    const [comments,setComments] = useState([]);
    const { request } = useAuth;

    useEffect(()=>{

        const searchParams = new URLSearchParams({
            where: `gameId=${gameId}`
        })

        request.get(`${baseUrl}/${searchParams.toString()}`)
        .then(setComments)
    },[request,gameId])


    return{
        comments,
    }
}
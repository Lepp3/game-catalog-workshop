import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/games';

export const useCreateGame = () =>{

    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    const create = (gameData) =>{
        return request.post(baseUrl,gameData,options)
    }

    return {
        create
    }
}

export const useGames = () =>{

    const [games,setGames] = useState([]);

    useEffect(()=>{
        request.get(baseUrl)
        .then(setGames);
    },[])

    return{
        games
    }
}

export const useGame = (gameId) =>{
    const [game,setGame] = useState({});

    useEffect(()=>{
        request.get(`${baseUrl}/${gameId}`)
        .then(setGame)
    },[gameId])

    return{
        game
    }
}
import { request } from "../utils/requester.js";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export default {
    getAllGames(){
        

        return Object.values(result);
    },
     create(gameData){
        return request('POST',baseUrl,gameData);
    }
}
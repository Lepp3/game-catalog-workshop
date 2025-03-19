import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/games'

export default {
    async getAllGames(){
        const result = await request.get(baseUrl);
        const games = Object.values(result);

        return games
    },
    async getOneGame(gameId){
        const result = await request.get(`${baseUrl}/${gameId}`);

        return result
    },
     create(gameData){

        return request.post(baseUrl,gameData)
        
    }
}
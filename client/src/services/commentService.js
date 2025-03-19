import request from "../utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    createComment(email,gameId,comment){
        return request.post(baseUrl, {email,gameId,comment})
    },
    async getAllComments(gameId){
        const comments = await request.get(baseUrl);

        const gameComments = Object.values(comments).filter(comment=>comment.gameId === gameId);

        return gameComments;
    }
}
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router";
import gameService from "../../services/gameService";
import ShowComments from "../show-comments/ShowComments";
import CreateComment from "../create-comments/CreateComment";


export default function GameDetails(){
    const {gameId} = useParams();
    const navigate = useNavigate();

    const [game,setGame] = useState({});

    useEffect(()=>{
        gameService.getOneGame(gameId)
        .then(result=>{
            setGame(result)
        })
    },[])


    const gameDeleteHandler = async () =>{
        const choice = confirm(`Are you sure you want to delete ${game.title}?`);
        if(!choice){
            return
        }
        
        await gameService.deleteOne(gameId);
        navigate('/games');
        
    }

    
    return(
        <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">

        <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
        </div>

        <p className="text">
        {game.summary}
        </p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <ShowComments/>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
            <button 
            className="button"
            onClick={gameDeleteHandler}
            >
                Delete
            </button>
        </div>
    </div>

    {/* <!-- Bonus --> */}
    {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <CreateComment/>

</section>
    )
}
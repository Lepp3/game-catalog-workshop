import { useEffect, useState, } from "react"
import { Link } from "react-router";
import gameService from "../../services/gameService.js";

export function GameCatalog(){

   const [games,setGames] = useState([]);

    useEffect(()=>{
        gameService.getAllGames()
        .then(result=>{
            setGames(result) 
        })
        
    },[])


    return(
        <section id="catalog-page">
    <h1>All Games</h1>
    {games.length> 0 ? games.map(game=><div key={game._id} className="allGames">
        <div className="allGames-info">
            <img src={game.imageUrl}/>
            <h6>{game.title}</h6>
            <h2>{game.category}</h2>
            <Link to={`/games/${game._id}/details`} className="details-button">Details</Link>
        </div>

    </div>): <h3 className="no-articles">No articles yet</h3>}
    
    
</section>
    )
}
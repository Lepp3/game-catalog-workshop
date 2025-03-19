import { Link } from "react-router"

export default function GameCatalogItem(game){
    return(
        <div className="allGames">
        <div className="allGames-info">
            <img src={game.imageUrl}/>
            <h6>{game.title}</h6>
            <h2>{game.category}</h2>
            <Link to={`/games/${game._id}/details`} className="details-button">Details</Link>
        </div>

    </div>
    )
}
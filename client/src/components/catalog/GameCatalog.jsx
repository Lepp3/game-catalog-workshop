import { useEffect, useState, } from "react"
import { Link } from "react-router";
import gameService from "../../services/gameService.js";
import GameCatalogItem from "./GameCatalogItem.jsx";
import { useGames } from "../../api/gameApi.js";

export function GameCatalog(){

    const {games} = useGames();


    return(
        <section id="catalog-page">
    <h1>All Games</h1>
    {games.length> 0 ? games.map(game=><GameCatalogItem key={game._id} {...game}/>): <h3 className="no-articles">No articles yet</h3>}
    
    
</section>
    )
}
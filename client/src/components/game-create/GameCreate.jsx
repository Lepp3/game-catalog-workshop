import gameService from "../../services/gameService.js";

export default function GameCreate(){

    const submitAction = async (formData)=> {
        const gameData = Object.fromEntries(formData);
        const result = await gameService.create(gameData);
        console.log(result);
    }
    return(
        <section id="create-page" className="auth">
    <form id="create" action={submitAction}>
        <div className="container">

            <h1>Create Game</h1>
            <label htmlFor="title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title..."/>

            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category..."/>

            <label htmlFor="maxLevel">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input className="btn submit" type="submit" value="Create Game"/>
        </div>
    </form>
</section>
    )
}
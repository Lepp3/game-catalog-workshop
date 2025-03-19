import commentService from "../../services/commentService.js";

export default function CreateComment({
    email,
    gameId
}){

    const commentAction = async(formData) =>{
        const content = formData.get('comment');
        

        const createdComment = await commentService.createComment(email,gameId,content);

        
        
    }

    return(
        <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={commentAction}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment"/>
        </form>
        </article>
    )
}
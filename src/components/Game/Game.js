import { Comments } from "./AboutGame/Comments/Comments"
import { GameInfo } from "./AboutGame/GameInfo/GameInfo"

export const Game = ({game, movies, comments, updateComments}) => {
   return (
       <>
        <GameInfo game={game} movies={movies}/>
        <Comments comments={comments} updateComments={updateComments}/>
       </>
   )
}
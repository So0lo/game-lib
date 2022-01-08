import { Comments } from "./AboutGame/Comments/Comments"
import { GameInfo } from "./AboutGame/GameInfo/GameInfo"

export const Game = ({game, movies, reddit, updateComments}) => {
   return (
       <>
        <GameInfo game={game} movies={movies}/>
        <Comments reddit={reddit} updateComments={updateComments}/>
       </>
   )
}
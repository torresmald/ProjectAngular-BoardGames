
import { Category } from "../../categories/transformed/category.model"
import { NumberPlayers } from "./numberPlayers.model"
import { PlayingTime } from "./playingTime.model"

export interface BoardGames {
    _id: string,
    id: string,
    title: string,
    designer: String[],
    publisher: string,
    year: number,
    category: Category,
    picture: string,
    players: NumberPlayers[],
    weight: number,
    playingTime: PlayingTime[],
    isForChilds: boolean,
}

export interface PagedBoardGames{
    games: BoardGames[],
    nextPage: string | null,
    previousPage: string | null
}
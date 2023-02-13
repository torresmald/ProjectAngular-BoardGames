import { NumberPlayers } from "../../../models/boardGames/transformed/numberPlayers.model"
import { PlayingTime } from "../transformed/playingTime.model"
import { Categories } from "../../categories/transformed/category.data"


export interface ApiBoardGames {
    _id: string,
    id: string,
    title: string,
    designer: String[],
    publisher: string,
    year: number,
    category: Categories,
    picture: string,
    players: NumberPlayers[],
    weight: number,
    playingTime: PlayingTime[],
    isForChilds: boolean,
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}

export interface ApiPagedBoardGames{
    games: ApiBoardGames[],
    nextPage: string | null,
    previousPage: string | null
}
import { Category } from "../categgory.model"
import { BoardGames } from "../boardGames.model"
export interface ApiBoardGames {
    _id: string,
    id: string,
    title: string,
    designer: String[],
    publisher: string,
    year: number,
    category: Category[],
    picture: string,
    players: string,
    weight: number,
    playingTime: string,
    isForChilds: boolean,
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}

// export interface ApiBoardGames {
//     games: BoardGame[],
//     nextPage: string | null,
//     previousPage: string | null
// }
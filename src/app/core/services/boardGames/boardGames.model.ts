import { Category } from "./categgory.model"

export interface BoardGames {
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
    favoriteCount?: number
}
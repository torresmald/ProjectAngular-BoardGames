import { Age } from "../../categories/transformed/age.model";

export interface ApiUsers {
    _id?: string,
    email: string,
    password: string,
    age: number,
    nickname: string,
    favoriteGames?: string[],
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}
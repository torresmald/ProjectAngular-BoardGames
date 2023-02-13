import { Categories } from "../transformed/category.data";

export interface ApiCategories {
    _id: string,
    id: string,
    name: Categories,
    description: string,
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}
import { Category } from "src/app/core/models/categories/transformed/category.model";
import { ApiBoardGames } from "../../../models/boardGames/api/api-boardGames.model";
import { BoardGames } from "../../../models/boardGames/transformed/boardGames.model";

export function transformDataGames(apiBoardGame: ApiBoardGames, selectedCategory?: Category): BoardGames {
    delete apiBoardGame.createdAt;
    delete apiBoardGame.__v;
    delete apiBoardGame.updatedAt;
    return {
        ...apiBoardGame,
        category: selectedCategory
            ? selectedCategory
            : { name: apiBoardGame.category}
    }
}

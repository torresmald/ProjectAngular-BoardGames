import { ApiBoardGames } from "./api/api-boardGames.model";
import { BoardGames } from "./boardGames.model";

export function transformData(apiBoardGame: ApiBoardGames): BoardGames {
    delete apiBoardGame.createdAt;
    delete apiBoardGame.__v;
    delete apiBoardGame.updatedAt;
    return apiBoardGame;
}
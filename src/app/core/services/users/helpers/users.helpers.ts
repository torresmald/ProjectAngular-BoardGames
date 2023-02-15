import { ApiUsers } from "src/app/core/models/users/api/api-users.model";
import { Users } from "src/app/core/models/users/transformed/users.model";

export function transformDataUsers(user: Users): Users {
    delete user.__v
    delete user._id;
    delete user.updatedAt;
    delete user.createdAt;
    return user;
}
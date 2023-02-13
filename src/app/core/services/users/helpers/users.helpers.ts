import { ApiUsers } from "src/app/core/models/users/api/api-users.model";
import { Users } from "src/app/core/models/users/transformed/users.model";

export function transformDataUsers(apiUser: ApiUsers): Users {
    delete apiUser.__v;
    delete apiUser._id;
    delete apiUser.updatedAt;
    delete apiUser.createdAt;
    return apiUser;
}
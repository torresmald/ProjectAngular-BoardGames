import { Age } from "../transformed/age.model";
import { Users } from "../transformed/users.model";

export interface ApiUsers {
    user: Users,
    token: string
}
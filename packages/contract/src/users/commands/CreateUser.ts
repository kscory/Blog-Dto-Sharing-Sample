import { UserType } from '../models/UserType';

export interface CreateUser {
    id: string;
    type: UserType
    age: number;
    email: string;
    password: string;
}
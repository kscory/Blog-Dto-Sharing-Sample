import { UserType } from '../models/UserType';

export interface UserView {
    id: string;
    type: UserType
    age: number;
    email: string;
    signedAt: string;
}
import { UserType } from '@kscory/blog-dto-sharing-sample-contract';

export interface User {
    id: string;
    type: UserType
    age: number;
    email: string;
    password: string;
    signedAt: string;
}
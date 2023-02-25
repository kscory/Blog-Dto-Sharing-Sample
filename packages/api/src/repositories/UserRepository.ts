import { User } from '../models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
    public users: User[] = []

    public create(user: User): void {
        this.users.push(user);
    }

    public findById(userId: string): User | undefined {
        return this.users.filter(user => user.id === userId).pop();
    }

    public findAll(): User[] {
        return this.users;
    }
}
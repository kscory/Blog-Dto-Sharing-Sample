import { Injectable } from '@nestjs/common';
import { CreateUser, UserView } from '@kscory/blog-dto-sharing-sample-contract';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {
    }

    async createUser(command: CreateUser): Promise<void> {
        if (this.userRepository.findById(command.id)) {
            throw new Error("Already existed user");
        }
        this.userRepository.create({
            id: command.id,
            type: command.type,
            age: command.age,
            email: command.email,
            password: command.password,
            signedAt: new Date(Date.now()).toUTCString(),
        })
    }

    async getUserById(params: { userId: string; }): Promise<UserView> {
        const user = this.userRepository.findById(params.userId);
        if (!user) {
            throw new Error("not find user")
        }
        return {
            id: user.id,
            type: user.type,
            age: user.age,
            email: user.email,
            signedAt: user.signedAt,
        }
    }

    async getAll(): Promise<UserView[]> {
        return this.userRepository.findAll();
    }
}
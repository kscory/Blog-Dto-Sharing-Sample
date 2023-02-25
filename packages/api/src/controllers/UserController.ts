import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateUser, UserView } from '@lee-kyungseok/blog-dto-sharing-sample-contract';
import { UserService } from '../services/UserService';

@Controller('api/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('')
    @HttpCode(201)
    async createUser(
        @Body() command: CreateUser,
    ): Promise<UserView> {
        await this.userService.createUser(command);
        return this.userService.getUserById({ userId: command.id });
    }

    @Get(':userId')
    @HttpCode(200)
    async getUser(
        @Param('userId') userId: string,
    ): Promise<UserView> {
        return this.userService.getUserById({ userId });
    }

    @Get('')
    @HttpCode(200)
    async getUsers(): Promise<UserView[]> {
        return this.userService.getAll();
    }
}

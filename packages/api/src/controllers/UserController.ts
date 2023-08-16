import { Controller, HttpCode } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { CreateUser, UserView } from '@kscory/blog-dto-sharing-sample-contract';
import { UserService } from '../services/UserService';

@Controller('api/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    /**
     * 유저를 생성한다.
     *
     * @param command 생성할 유저 정보
     * @returns 생성한 유저 정보
     */
    @TypedRoute.Post('')
    @HttpCode(201)
    async createUser(
        @TypedBody() command: CreateUser,
    ): Promise<UserView> {
        await this.userService.createUser(command);
        return this.userService.getUserById({ userId: command.id });
    }

    /**
     * 유저를 가져온다.
     *
     * @param userId 가져올 유저의 id
     * @returns 유저 정보
     */
    @TypedRoute.Get(':userId')
    @HttpCode(200)
    async getUser(
        @TypedParam('userId', 'uuid') userId: string,
    ): Promise<UserView> {
        return this.userService.getUserById({ userId });
    }

    /**
     * 모든 유저 정보를 가져온다.
     *
     * @returns 유저 정보 리스트
     */
    @TypedRoute.Get('')
    @HttpCode(200)
    async getUsers(): Promise<UserView[]> {
        return this.userService.getAll();
    }
}

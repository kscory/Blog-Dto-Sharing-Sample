import { UserType } from '../models/UserType';

/**
 * 생성할 유저의 정보
 */
export interface CreateUser {
    /**
     * 생성할 유저 id
     *
     * @format uuid
     */
    id: string;

    /**
     * 유저의 유형
     *
     */
    type: UserType

    /**
     * 유저 나이
     *
     * @minimum 14
     */
    age: number;

    /**
     * 유저 이메일 정보
     *
     * @format email
     */
    email: string;

    /**
     * 유저 패스워드
     *
     */
    password: string;
}
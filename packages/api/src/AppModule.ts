import { Module } from '@nestjs/common';
import { UserController } from './controllers/UserController';
import { UserService } from './services/UserService';
import { UserRepository } from './repositories/UserRepository';

@Module({
    providers: [
      UserService,
      UserRepository,
    ],
    controllers: [UserController],
})
export class AppModule {}

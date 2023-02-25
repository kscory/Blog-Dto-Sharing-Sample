import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const port = 3000;

    await app.listen(port, () => {
        console.log(`server is running with port: ${port}`);
    });

}
bootstrap();

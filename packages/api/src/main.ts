import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { SwaggerModule } from '@nestjs/swagger';
import * as swaggerJson from './swagger.json';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const copied = {
        ...swaggerJson,
        servers: [],
        info: {
            title: "Sharing dto example swagger",
            description: "Sharing dto example swagger",
            version: "1.1",
            contact: {}
        },
    }
    SwaggerModule.setup('docs', app, copied as any)

    const port = 3000;

    await app.listen(port, () => {
        console.log(`server is running with port: ${port}`);
    });

}
bootstrap();

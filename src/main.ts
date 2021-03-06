import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Урок по продвинутому BACKEND")
    .setDescription("Документация REST API")
    .setVersion("1.0.8")
    .addTag("ULBI TV")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docks", app, document);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { env } from '@app/shared/constants/environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  await app.listen(env.port)
}
bootstrap()

import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../../src/database/database.module'
import { UsersProvider } from './users.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...UsersProvider],
  exports: [],
})
export class UsersModule {}

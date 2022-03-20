import { Injectable, Inject } from '@nestjs/common'
import { IRepository } from '@app/shared/constants/repositories'
import { Users } from '../entity/users.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject(IRepository.UsersRepository)
    private readonly users: typeof Users,
  ) {}
}

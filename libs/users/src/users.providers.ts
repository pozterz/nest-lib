import { IRepository } from '@app/shared/constants/repositories'
import { Users } from '@app/users/entity/users.entity'

export const UsersProvider = [
  {
    provide: IRepository.UsersRepository,
    useValue: Users,
  },
]

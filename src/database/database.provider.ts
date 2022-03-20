import { Sequelize } from 'sequelize-typescript'
import { env } from '@app/shared/constants'
import { entities } from '../modules/entities'
const { database } = env

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.dbname,
      })
      sequelize.addModels(entities)
      await sequelize.sync()
      return sequelize
    },
  },
]

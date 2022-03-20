import * as dotenv from 'dotenv'
dotenv.config()

export const env = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbname: process.env.DB_NAME,
    port: +process.env.DB_PORT,
  },
}

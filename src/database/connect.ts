import { createPool } from 'mysql2'

export const connect = async () => await createPool({
  host: 'localhost',
  user: 'root',
  database: 'records_company',
  password: 'thisIsAGenericPassword',
  connectionLimit: 10
})

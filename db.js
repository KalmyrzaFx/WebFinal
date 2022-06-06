const { Pool } = require('pg')
const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}
:${process.env.DB_PORT}/${process.env.DB_NAME}`
const proConfig = {
    connectionString: process.env.DATABASE_URL 
}

const pool = new Pool({
    connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig
})
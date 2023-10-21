import { Sequelize } from "sequelize";

const db = new Sequelize('np_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
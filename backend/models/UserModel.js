import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    honorarium: DataTypes.INTEGER,
    pajak: DataTypes.INTEGER,
    transport: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();
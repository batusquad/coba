import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SPRR = db.define('sprr',{
    yth: DataTypes.STRING,
    dari: DataTypes.STRING,
    hal: DataTypes.STRING,
    lampiran: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY,
    rapat: DataTypes.STRING,
    lantai: DataTypes.STRING,
    hari: DataTypes.STRING,
    divisi: DataTypes.STRING,
    tanggalrapat: DataTypes.DATEONLY,
    waktu: DataTypes.TIME,
},{
    freezeTableName:true
});

export default SPRR;

(async()=>{
    await db.sync();
})();
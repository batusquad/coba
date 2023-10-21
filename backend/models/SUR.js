import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SUR = db.define('sur',{
    nomor: DataTypes.INTEGER,
    sifat: DataTypes.STRING,
    hal: DataTypes.STRING,
    lampiran: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY,
    program: DataTypes.STRING,
    divisi: DataTypes.STRING,
    melaksanakan: DataTypes.STRING,
    hari: DataTypes.STRING,
    tanggalkegiatan: DataTypes.DATEONLY,
    waktu: DataTypes.TIME,
    tempat: DataTypes.STRING,
    acara: DataTypes.STRING,
    atasan: DataTypes.STRING
},{
    freezeTableName:true
});

export default SUR;

(async()=>{
    await db.sync();
})();
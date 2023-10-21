import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SUK = db.define('suk',{
    yth: DataTypes.STRING,
    dari: DataTypes.STRING,
    hal: DataTypes.STRING,
    lampiran: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY,
    rangka: DataTypes.STRING,
    divisi: DataTypes.STRING,
    kegiatan: DataTypes.STRING,
    hari: DataTypes.STRING,
    tanggalkegiatan: DataTypes.DATEONLY,
    atasan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default SUK;

(async()=>{
    await db.sync();
})();
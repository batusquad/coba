import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    lampiran:DataTypes.STRING,
    nomor: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY,
    namakegiatan:DataTypes.STRING,
    tanggalkegiatan:DataTypes.DATEONLY,
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    honorarium: DataTypes.INTEGER,
    pajak: DataTypes.INTEGER,
    transport: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    namadirektur: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();
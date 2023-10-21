import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SPD = db.define('spd',{
    dokumen: DataTypes.STRING,
    namapegawai: DataTypes.STRING,
    maksudperjalanandinas: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    angkutan: DataTypes.STRING,
    tempatberangkat: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    estimasiwaktu: DataTypes.TIME,
    tanggalberangkat: DataTypes.DATEONLY,
    tanggalharuskembali: DataTypes.DATEONLY,
    namaanggota: DataTypes.STRING,
    namaanggota1: DataTypes.STRING,
    tanggallahir: DataTypes.DATEONLY,
    tanggallahir1: DataTypes.DATEONLY,
    keterangan: DataTypes.STRING,
    keterangan1: DataTypes.STRING,
    divisi: DataTypes.STRING,
    nomordivisi: DataTypes.INTEGER,
    ketlainlain: DataTypes.STRING,
    
},{
    freezeTableName:true
});

export default SPD;

(async()=>{
    await db.sync();
})();
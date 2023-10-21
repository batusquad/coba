import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SPB = db.define('spb',{
    uraian: DataTypes.INTEGER,
    vol: DataTypes.INTEGER,
    satuan: DataTypes.INTEGER,
    hargasatuan: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
},{
    freezeTableName:true
});

export default SPB;

(async()=>{
    await db.sync();
})();
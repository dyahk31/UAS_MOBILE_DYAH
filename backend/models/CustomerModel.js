import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Cust = db.define('customers', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    type_service: DataTypes.STRING,
    note: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Cust;

(async() => {
    await db.sync();
})();
import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

const Usuario = conn.define(
    "usuarios",
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        }

    },{
        tableName: "usuarios"
    })

    export default Usuario
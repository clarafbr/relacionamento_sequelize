import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

import Usuario from "./usuarioModel.js"

const Perfil = conn.define(
    "perfis", {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },
    bio:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: "perfis"
})

//associação 1 para 1 
Usuario.hasOne(Perfil)
Perfil.belongsTo(Usuario)

export default Perfil
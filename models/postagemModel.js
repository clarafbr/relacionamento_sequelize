import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

import Perfil from "./perfilModel.js"
const Postagem =conn.define(
    "postagens",
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull: false
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "postagens"
    }
)

//associacão 1 para muitos
Perfil.hasMany(Postagem)
Postagem.belongsTo(Perfil)

export default Postagem
import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

import Perfil from "./perfilModel.js";
import Postagem from "./postagemModel.js";

const Comentario = conn.define(
"comentarios",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },
    comentario:{
        type:DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: "comentarios"
})

//associação muitos para muitos 
Perfil.belongsToMany(Postagem, {through: 'comentarios'})
Postagem.belongsToMany(Perfil, {through: 'comentarios'})
export default Comentario
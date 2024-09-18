import conn from "./config/conn.js"
import express from "express"

const PORT = 3333

//MODEL
import Usuario from "./models/usuarioModel.js"
import Perfil  from "./models/perfilModel.js"
import Postagem from "./models/postagemModel.js"
import Comentario from "./models/comentarioModel.js"

const app = express()

app.get("/", (request, response)=>{
    response.send('Olá mundo!')
})

conn.sync(/*{force: true}*/).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Servidor on http://localhost:${PORT}`)
    })
})
.catch((err)=>console)

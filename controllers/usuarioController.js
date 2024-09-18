import { request, response } from "express"
import Usuario from "../models/usuarioModel.js"
import { z } from "zod"
import formatZodError from "../helpers/zodError.js"

const createSchema = z.object({
    email: z.string().email({ message: "Email inválido!"}),
    password: z.string().min(6, {message: "A senha deve ter pelo menos 6 caracteres"}),
})

export const create = async (request, response)=> {
    
    //implementar a validação 
    const bodyValidation = createSchema.safeParse(request.body)
    if(!bodyValidation.success){
        response.status(400).json({
            message: "Os dados recebidos do corpo da requisição são invalidos",
            detalhes: formatZodError(bodyValidation.error)
        })
        return
    }
    

    const {email, password}= request.body

    const novoUsuario = {
        id,
        email,
        password
    }

    try {
        await Usuario.create(novoUsuario)
        response.status(201).json({message:"Usuario cadastrado com sucesso"})
    } catch (error) {
        console.error(error)
        response.status(500).json({message:"Erro ao cadastrar usuario"})
    }
}
import { AppError } from "@shared/errors/AppError";
import { Router } from "express";

const routes = Router()

routes.get('/', (req, res) => {
    throw new AppError('Acesso negado')
    return res.json({message: 'Hello Dev'})
})


export {routes}
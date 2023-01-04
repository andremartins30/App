import { Router } from "express";

const routes = Router()

routes.get('/', (req, res) => {
    throw new Error( 'Acesso negado!')
    return res.json({message: 'Hello Dev'})
})


export {routes}
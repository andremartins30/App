import { RolesRepository } from "@roles/repositories/RolesRepository";
import { CreateRoleController } from "@roles/useCase/createRole/CreateRoleController";
import { Router } from "express";
import { v4 as uuidv4} from 'uuid'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

const createRolesController = new CreateRoleController

rolesRouter.post('/', (req, res) => {
    return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {

    const roles = rolesRepository.findAll()
    return res.json(roles)

})

export { rolesRouter }
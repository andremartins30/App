import { Role } from "@roles/entities/Role"
import { type } from "os"



type CreateRoleDTO = {
    name: string
}

export class RolesRepository{

    private roles: Role[]

    constructor(){
        this.roles = []
    }

    create({name}: CreateRoleDTO) {
        const role = new Role()

        Object.assign(role, {
            name,
            created_at: new Date(),
        })

        this.roles.push(role)

        return role
    }

    findAll(): Role[] {
        return this.roles
    }


    findByName(name: string): Role | undefined {
        return this.roles.find(role => role.name === name)
    }
}

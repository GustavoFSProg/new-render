import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function getUsers(req, res){
    try {
        const users = await prisma.user.findMany()

        return res.status(201).send( users)
        
    } catch (error) {

        return res.status(400).send({msg: "ERROR", error})

        
    }

}

export default {getUsers}
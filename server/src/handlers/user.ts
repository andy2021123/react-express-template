import { Request, Response } from "express"
import User from "../models/user.js"

export async function getUsers(req: Request, res: Response) {
  const users = await User.findAll()
  console.log(users)
  res.send(users)
}

export async function createUser(req: Request, res: Response) {
  const { body } = req
  await User.create({ 
    first: body.first, 
    last: body.last,
    address1: body.address[0],
    address2: body.address[1]
  })
  res.sendStatus(201)
}

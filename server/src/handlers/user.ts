import { Request, Response } from "express";
import User from "models/user";

export async function getUsers(req: Request, res: Response) {
  const users = await User.findAll();
  console.log(users);
  res.send(users);
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  await User.create(body);
  res.sendStatus(201);
}

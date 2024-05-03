import express from 'express'
import morgan from 'morgan'
import fs from 'node:fs'
import { getUsers } from '../database/users.js'

const router = express.Router()

// api only middleware
router.use(morgan('dev'))

// routes
router.get('/hello', async (req, res) => {
  res.send({message: 'hello world!'})
})

router.get('/users', async (req, res) => { // demonstrate database usage
  const users = await getUsers()
  console.log(users)
  res.send(users)
})

router.get('/image', async (req, res) => {
  if (fs.existsSync(`images/pizza.png`)) {
    res.sendFile(`pizza.png`, { root: './images' })
  } else {
    res.sendStatus(204)
  }
})

// router.use('/category', category) // can split into separate files for organization

export default router
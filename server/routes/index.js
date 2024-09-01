import express from 'express'
import morgan from 'morgan'
import fs from 'node:fs'
import { User } from '../database/index.js'

const router = express.Router()

// api only middleware
router.use(morgan('dev'))

// routes
router.get('/hello', async (req, res) => {
  res.send({ message: 'hello world!' })
})

router.get('/users', async (req, res) => { // demonstrate database usage
  const users = await User.findAll()
  console.log(users)
  res.send(users)
})

router.post('/user', async ({ body }, res) => {
  const user = await User.create({ 
    first: body.first, 
    last: body.last,
    address1: body.address[0],
    address2: body.address[1]
  })
  res.sendStatus(201)
})

// router.get('/image', async (req, res) => {
//   if (fs.existsSync(`data/images/image.png`)) {
//     res.sendFile(`image.png`, { root: './data/images' })
//   } else {
//     res.sendStatus(204)
//   }
// })

// router.use('/category', category) // can split into separate files for organization

export default router
import express, { Request, Response } from "express"
import path from "path"
import { fileURLToPath } from "url"
import fs from "node:fs"

const dist = process.env.DIST || "dist"
const router = express.Router()

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

router.get("/", (req: Request, res: Response) => {
  const filePath = path.resolve(__dirname, dist, "index.html")
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      data = data
      .replace(/__TITLE__/g, "Home Page")
      .replace(/__DESCRIPTION__/g, "Home Page Description")
      .replace(/__IMAGE__/g, "/image.png")

      res.send(data)
    }
  })
})

router.use(express.static(path.resolve(__dirname, dist)))

router.get("/data", (req: Request, res: Response) => {
  const domain = `${req.protocol}://${req.header("Host")}`

  const filePath = path.resolve(__dirname, dist, "index.html")
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      data = data
      .replace(/__TITLE__/g, "Data Page")
      .replace(/__DESCRIPTION__/g, "Data Page Description")
      .replace(/__IMAGE__/g, `${domain}/api/image`)

      res.send(data)
    }
  })
})

router.get("/*", (req: Request, res: Response) => {
  const filePath = path.resolve(__dirname, dist, "index.html")
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      data = data
      .replace(/__TITLE__/g, "React Express Template")
      .replace(/__DESCRIPTION__/g, "App Description")
      .replace(/__IMAGE__/g, "/image.png")

      res.send(data)
    }
  })
})

export default router

import path from "node:path";
import fs from "node:fs";
import express, { Request, Response } from "express";

function defaultPage(req: Request, res: Response) {
  const filePath = path.resolve(
    path.resolve(__dirname, "public"),
    "index.html"
  );
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data
        .replace(/__TITLE__/g, "React Express Template")
        .replace(/__DESCRIPTION__/g, "App Description")
        .replace(/__IMAGE__/g, "/image.png");
      res.send(data);
    }
  });
}

function dataPage(req: Request, res: Response) {
  const domain = `${req.protocol}://${req.header("Host")}`;
  const filePath = path.resolve(
    path.resolve(__dirname, "public"),
    "index.html"
  );
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data
        .replace(/__TITLE__/g, "Data Page")
        .replace(/__DESCRIPTION__/g, "Data Page Description")
        .replace(/__IMAGE__/g, `${domain}/api/image`);
      res.send(data);
    }
  });
}

const router = express.Router();

router.get("/", defaultPage);
router.use(express.static(path.resolve(__dirname, "public")));
router.get("/data", dataPage);
router.get("/*", defaultPage);

export default router;

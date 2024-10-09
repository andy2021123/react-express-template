import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

import router from "routes";
import sequelize from "database";
import client from "client";
import "scheduledJobs";

// create app instance
const app = express();

// middleware
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
    strictTransportSecurity: false,
  })
);
app.use(express.json());

// basic error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Error!" });
});

app.use("/api", router); // api routes
app.use("/", client); // client routes

sequelize.sync();

// start the app on designated port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

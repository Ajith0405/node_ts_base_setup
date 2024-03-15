import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const whiteList = [
  "http://127.0.0.1:5050",
  "http://localhost:3000",
  "http://127.0.0.1:5432",
];

const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const main = async () => {
  try {
    // Middlewares
    app.use(express.json());
    // cors middleware
    app.use(cors(corsOptions));

    // Router middleware

    app.listen(PORT, () => {
      console.log("server Running on " + PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
};

main();

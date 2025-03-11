import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { authenticate } from "./middleware";
import { registerUser } from "./user";
import { uploadFile, getSignedUrl } from "./storage";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());


app.post("/register", registerUser);
app.post("/upload", authenticate, uploadFile);
app.get("/signed-url", authenticate, getSignedUrl);


exports.api = functions.https.onRequest(app);
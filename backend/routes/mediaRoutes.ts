import express from "express";
import * as mc from "../controllers/mediaController";
const app = express.Router();

app.get("/", mc.getAllMedia);
app.get("/:username", mc.getUsersMedia);
app.get(":username/:mediaID", mc.getSpecificMedia);
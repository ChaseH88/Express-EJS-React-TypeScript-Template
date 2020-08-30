import express from "express";
import { getRoute } from "../controllers/route";
const router = express.Router();

router
  .route("/")
    .get(getRoute);
    
export default router;
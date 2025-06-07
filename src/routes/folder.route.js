import { getfathersFolder, createFolder, getChildrensByFolder } from "../controllers/folder.controller.js";

import { Router } from "express";

const router = Router();

router.get("/fathers", getfathersFolder);
router.post("/fathers", createFolder);
router.get("/fathers/childrens/:id", getChildrensByFolder);

export default router;

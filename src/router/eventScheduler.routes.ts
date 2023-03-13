
import express from "express";
import EventSchedulerController from "../controller/eventScheduler.controller";

const router = express.Router();

router.post("/create",EventSchedulerController.create);
router.get("/get", EventSchedulerController.get);
router.get("/update/:id", EventSchedulerController.update);


module.exports = router;

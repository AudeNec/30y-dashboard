import express from "express";
import dailyActions from "./modules/daily/dailyActions";
import propertyActions from "./modules/property/propertyActions";

const router = express.Router();

router.get("/api/daily", dailyActions.browse);
router.post("/api/daily", dailyActions.add);
router.get("/api/daily/:date", dailyActions.read);
router.put("/api/daily/:date", dailyActions.edit);

router.get("/api/properties/:property", propertyActions.browse);
router.get(
  "/api/properties/:property/sum",
  propertyActions.browseAndSumProperty,
);

export default router;

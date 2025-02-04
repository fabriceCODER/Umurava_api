import { Router } from "express";
import  ChallengeController  from "@/controllers/challengeController";

const router = Router();

router.post("/", ChallengeController.create);
router.get("/", ChallengeController.getAll);
router.get("/:id", ChallengeController.getById);
router.put("/:id", ChallengeController.update);
router.delete("/:id", ChallengeController.delete);

export default router;
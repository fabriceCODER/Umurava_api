const express = require("express");
const ChallengeController = require("../controllers/challengeController");

const router = express.Router();

router.get("/", ChallengeController.getAll);
router.post("/", ChallengeController.create);
router.get("/:id", ChallengeController.getById);
router.put("/:id", ChallengeController.update);
router.delete("/:id", ChallengeController.delete);

module.exports = router;

const router = require("express").Router();
const Result = require("../db/models/resultModel");

router.get("/", async (req, res, next) => {
  try {
    const results = await Result.findAll();
    res.json(results);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await Result.findByPk(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

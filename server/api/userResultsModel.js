const router = require("express").Router();
const { userResultsModel } = require("../db")

router.get("/", async (req, res, next) => {
  try {
    const userResults = await userResultsModel.findAll();
    res.json(userResults);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const userResult = await userResultsModel.findByPk(req.params.id);
    res.json(userResult);
  if (!userResult) {
    res.status(404).send("Does not exist");
    return;
  }
  res.json(userResult);
} catch (error) {
  next(error);
}
});

router.post("/", async (req, res, next) => {
  try {
    const newUserResult = await userResultsModel.create(req.body);
    res.json(newUserResult);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteResult = await userResultsModel.findByPk(req.params.id);
    await deleteResult.destroy();
    res.status(200).send(deleteResult);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

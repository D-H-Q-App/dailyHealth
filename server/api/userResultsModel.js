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
    const userResults = await userResultsModel.findByPk(req.params.userId);
    res.json(userResults);
  } catch (error) {
    next(error);
  }
});

// {where: {userId: req.params.userId}}
//{where:{userId}}


router.post("/", async (req, res, next) => {
  try {
    const newUserResult = await userResultsModel.findOrCreate({where: req.body});
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

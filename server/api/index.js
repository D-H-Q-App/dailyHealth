const router = require("express").Router();

router.use("/results", require("./resultsRouter"));

router.use("/questions", require("./questionsRouter"));

router.use("/userresults", require("./userResultsModel"));

router.use("/email", require("./emailRouter"));

router.use((req, res, next) => {
  const error = new Error("API not found");
  console.log("MY REQ HERE:", req);
  next(error);
});

module.exports = router;

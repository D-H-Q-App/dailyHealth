"use strict";

const {
  db,
  User, Result, Question
} = require("../server/db");

const userData = require("./data/user");
const questionsData = require("./data/questions");
const resultsData = require("./data/results");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(
    userData.map((data) => {
      return User.create(data);
    })
  );

  //Creating Questions
  const questions = await Promise.all(
    questionsData.map((data) => {
      return Question.create(data);
    })
  );

  // const questionOne = await Question.create({
  //   question:
  //     "Are you experiencing any or all of these symptoms: dry skin, hair, eyes, ears, lips, joints, stools? bloating, gas, and/or dehydration?",
  // });

  // const questionTwo = await Question.create({
  //   question:
  //     "Are you experiencing any or all of these symptoms: light-headedness, restless mind, ungroundedness,dizziness, thinness, or unwanted/extreme weightloss?",
  // });

  //Creating Results

  const results = await Promise.all(
    resultsData.map((data) => {
      return Result.create(data);
    })
  );

  // const resultOne = await Result.create({
  //   recommendation:
  //     "Drink more warm water or decaffinated tea, Add a little more ghee or olive oil to your diet, Enjoy some daily Licorice Tea",
  // });

  // const resultTwo = await Result.create({
  //   recommendation:
  //     "Enjoy more cheese, yogurt, black lentils, cream of wheat, ripe mangos or bananas, red meat, and if its summer time, a little ice cream at lunch time!",
  // });

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${questions.length} questions`);
  console.log(`seeded ${results.length} results`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/

if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

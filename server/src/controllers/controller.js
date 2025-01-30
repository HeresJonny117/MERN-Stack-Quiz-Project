// const Question = require("../models/questionSchema");
// const Result = require("../models/resultSchema");

// exports.Questions = async (req, res) => {
//   try {
//     const questions = await Question.find({});
//   } catch (e) {
//     console.error("Questions Failed", e.message);
//   }
// };

// exports.Quiz = async (req, res) => {
//   const { userId, answers } = req.body;
//   try {
//     const result = new Result({ userId, answers, score: 80 });
//   } catch (e) {
//     console.error("Quiz Failed", e.message);
//   }
// };

'use strict';
const rp = require('request-promise');
const AWS = require('aws-sdk');
const _ = require('lodash');

const s3 = new AWS.S3();

const getQuiz = () => {
  return new Promise((resolve, reject) => {
    const Bucket = 'morganf';
    const Key = 'quiz.json';
    const params = { Bucket, Key };
    s3.getObject(params, (err, data) => {
      if (!err)
        resolve(JSON.parse(data.Body.toString()));
      else
        reject(err);
    });
  });
};

const getQuestion = (quiz, questionId) =>
  Promise.resolve(quiz.questions.find(question => question.Id === questionId));

const sendToFirebase = question => {

  const options = {
    uri: 'https://morgan-quiz.firebaseio.com/quiz.json',
    method: 'POST',
    body: 'treter',
    json: true // Automatically parses the JSON string in the response
  };

  return rp(options)
    .then(res => question)
    .catch(console.log);
};

module.exports.handler = (event, context, callback) => {
  const questionId = event.pathParameters.qid;
  getQuiz()
    .then(quiz => getQuestion(quiz, questionId))
    .then(question => sendToFirebase(question))
    .then(question => {
      const response = {
        statusCode: 200,
        body: { question },
      };
      callback(null, response);
    })
    .catch(ex => {
      const res = {
        status: 500,
        body: ex,
      };
      callback(ex);
    });
};

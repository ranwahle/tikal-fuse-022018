'use strict';
const rp = require('request-promise');
const AWS = require('aws-sdk');
const _ = require('loadash');
const s3 = new AWS.S3();

const getQuiz = () => {
  return new Promise((resolve, reject) => {
    const Bucket = 'morganf';
    const Key = 'quiz.json';
    const params = { Bucket, Key };
    s3.getObject(params, (err, data) => {
      if (!err)
        resolve(data.Body.toString());
      else
        reject(err);
    });
  });
};

module.exports.endpoint = (event, context, callback) => {

  const questionId = event.pathParameters.qid;
  getQuiz()
    .then(quiz => {
      const response = {
        statusCode: 200,
        body: _.assignIn({}, quiz, { questionId }),
      };
      callback(null, response);
    });

  /*const options = {
    uri: 'https://morgan-quiz.firebaseio.com/state.json',
    method: 'POST',
    body: {
      some: 'payload',
    },
    json: true // Automatically parses the JSON string in the response
  };

  rp(options)
    .then(res => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, the current time is ${new Date().toTimeString()}.`,
        }),
      };

      callback(null, response);
    });*/
};

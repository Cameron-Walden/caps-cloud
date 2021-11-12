'use strict';
//consumer

const { Consumer } = require('sqs-consumer');

//grab this from sqs url
const queueUrl = 'https://sqs.us-west-2.amazonaws.com/801625029834/packages';

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    console.log(message);
  }
});

consumer.start();
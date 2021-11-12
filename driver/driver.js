'use strict';
//consumer

const { Consumer } = require('sqs-consumer');

//needed for fifo queue
const { Producer } = require('sqs-producer');

//grab this from sqs url
const queueUrl = 'https://sqs.us-west-2.amazonaws.com/801625029834/packages';

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: async (message) => {
    console.log(message, '<--------THIS IS MESSAGE');
  }
});

consumer.start();
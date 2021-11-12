'use strict';

//publisher

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

//grab this from aws sns topic arn
const topic = 'arn:aws:sns:us-west-2:801625029834:pickup';

const payload = {  
  Message: 'item has been picked up',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
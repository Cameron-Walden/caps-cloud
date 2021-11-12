'use strict';

//publisher

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const faker = require('faker');

//grab this from aws sns topic arn
const topic = 'arn:aws:sns:us-west-2:801625029834:pickup';

const order = {
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  vendorId: 777,
}

const payload = {  
  Message: JSON.stringify(order),
  TopicArn: topic,
};

setInterval(() => {
  sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
}, 7000);

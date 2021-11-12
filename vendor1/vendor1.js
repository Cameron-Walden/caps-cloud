'use strict';

//publisher

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const faker = require('faker');

//grab this from aws sns topic arn
const topic = 'arn:aws:sns:us-west-2:801625029834:pickup';

//{ orderId: 1234, customer: "Jane Doe", vendorId: queueArn}

const order = {
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  //Note the queueArn – this refers to the AWS ‘arn’ of the vendor’s specific delivered queue
  vendorId: 666,
}

const payload = {  
  //pass in the order
  Message: JSON.stringify(order),
  TopicArn: topic,
};


//   Set it up to produce a new message to the “pickup” topic every few seconds, simulating an order
// The order id and customer name can be randomized
// Include the ARN to the vendor’s personal delivery queue
setInterval(() => {
  sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
}, 10000);

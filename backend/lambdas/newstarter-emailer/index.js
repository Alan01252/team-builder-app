"use strict";

var AWS = require('aws-sdk');


var config = {};

if (!process.env.AWS_EXECUTION_ENV) {
    config = {
        endpoint: 'http://192.168.1.65:4572/',
        region: 'my-region',
        s3ForcePathStyle: true,
        s3BucketEndpoint: true,
        logger: console.log
    }
}

exports.handler = function (event, context) {


    var ses = new AWS.SES({apiVersion: '2010-12-01'});
    var emailer = new DayOneEmailer(ses);
    var newStarterFinder = new NewStarterFinder();

    new AWS.S3(config).getObject({Bucket: 'test-bucket', Key: 'members.json'}, function (err, data) {
        const newStarters = newStarterFinder.find(data.body.toString());
        emailer.sendDayOneEmail(newStarters);
        //TODO send to slack that a new person has started?
    });

};

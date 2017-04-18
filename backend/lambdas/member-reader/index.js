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

    new AWS.S3(config).getObject({Bucket: 'test-bucket', Key: 'members.json'}, function (err, data) {

        if (!err) {
            const response = {
                statusCode: 200,
                body: JSON.parse(data.Body.toString())
            };
            context.succeed(response)
        } else {
            context.fail(err);
        }
    });
};
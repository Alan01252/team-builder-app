var lambdaFunc = require('./index.js').handler;

console.log(lambdaFunc);

require('aws-mock-lambda-api-gateway').init({
    routes: [
        {
            method: 'GET',
            route: '/members',
            lambda: lambdaFunc
        }
    ],
    listen: [8090,'0.0.0.0']
}, function (e) {
    if(e) throw e
    console.log('Server Listening...')
})
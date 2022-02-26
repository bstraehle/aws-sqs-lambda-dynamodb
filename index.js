'use strict';

const AWS = require('aws-sdk');
const DDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = (event) => {
    const msg = event.Records[0].body;

    console.log('Message:', msg);

    var params = {
        TableName: TABLE_NAME,
        Item: {
            'id' : {S: msg}
        }
    };

    DDB.putItem(params, function(err) {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Success");
        }
    });
};


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    const { name, email,phone, message } = event.arguments.input;
    const params = {
        Destination: {
            ToAddresses: ['sandip.sudip36@gmail.com']
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
                }
            },
            Subject: { Data: `New message from ${name}` }
        },
        Source: 'sandip.sudip36@gmail.com'
    };
    try {
        await ses.sendEmail(params).promise();
    }
    catch (err) {
        console.log(err, err.stack);
        return {
            statusCode: 500,
            body: JSON.stringify('Internal Server Error')
        };
    }
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};

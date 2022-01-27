import fetch from 'node-fetch';
const { EMAIL_TOKEN } = process.env;
exports.handler = async (event) => {
    const email = JSON.parse(event.body).payload.email;
    console.log(`Recieved a submission: ${email}`);
    const response = await fetch(
        'https://api.buttondown.email/v1/subscribers',
        {
            method: 'POST',
            headers: {
                Authorization: `Token ${EMAIL_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        }
    );
    let responseText = await response.text();
    console.log('response:', responseText);
    return {
        statusCode: response.status,
        body: responseText,
    };
};

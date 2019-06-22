const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
const API_ENDPOINT = 'https://api.buttondown.email/v1/subscribers'

exports.handler = async (event, context, callback) => {
    const email = JSON.parse(event.body)
    console.log(email);
    return fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { Authorization: `Token ${EMAIL_TOKEN}` },
        body: JSON.stringify({ email }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => ({ statusCode: 422, body: String(error) }))
}

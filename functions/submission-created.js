const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
const API_ENDPOINT = 'https://api.buttondown.email/v1/subscribers'

exports.handler = async (event, context, callback) => {
    const email = JSON.parse(event.body).payload.email
    console.log(email)
    return fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Token ${EMAIL_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => ({ statusCode: 422, body: String(error) }))
}

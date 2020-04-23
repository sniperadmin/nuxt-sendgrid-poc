const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const dotenv = require('dotenv')

const config = dotenv.config()

if (config.error) {
  console.log('Could not load env file', config.error)
}
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const sgMail = require('@sendgrid/mail')
// const client = require('@sendgrid/client')

app.get('/nest', sendEmail)

function sendEmail (req, res, next) {
  const headers = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  res.writeHead(200, headers)
  // const content = req.body

  const credentials = `${process.env.SENDGRID_API_KEY}`
  sgMail.setApiKey(credentials)
  const msg = {
    to: 'nasrbue@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }
  sgMail
    .send(msg)
    .then(() => {}, (error) => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    })
}

app.listen(5000, () => console.log(`Swamp Events service listening on port ${5000}`))

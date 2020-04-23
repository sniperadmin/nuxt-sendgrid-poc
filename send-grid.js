const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

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
    'Content-Type': 'application/json'
  }
  res.writeHead(200, headers)
  // const content = req.body

  sgMail.setApiKey('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')
  const msg = {
    to: 'nasrbue@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  (async () => {
    try {
      await sgMail.send(msg)
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })()
}

app.listen(8080, () => console.log(`Swamp Events service listening on port ${8080}`))

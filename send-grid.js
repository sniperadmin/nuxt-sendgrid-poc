const sgMail = require('@sendgrid/mail')
// const client = require('@sendgrid/client')

export default function sendEmail () {
  // client.setApiKey(process.env.SENDGRID_API_KEY)
  // const request = {
  //   method: 'GET',
  //   url: '/v3/api_keys'
  // }
  // client.request(request)
  //   .then(([response, body]) => {
  //     console.log(response.statusCode)
  //     console.log(body)
  //   })

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

"use strict"
const nodemailer = require("nodemailer")

async function mailer(requestedData) {
  let transporter = nodemailer.createTransport({
    host: requestedData.host,
    port: requestedData.port,
    secure: requestedData.secure,
    auth: {
      user: requestedData.username,
      pass: requestedData.password,
    },
    debug: true,
    logger: true
  })

  let info = await transporter.sendMail({
    from: `${requestedData.name} <${requestedData.from}>`,
    to: requestedData.to,
    subject: requestedData.subject,
    html: requestedData.body,
  })

  return `Message sent: ${info.messageId}`
}

module.exports = mailer
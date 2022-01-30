const express = require('express')
const router = express.Router()
const mailer = require('../mail/mailer')

router.get('/', (req, res) => {
    res.json({
        message: "api is running at /send",
        status: 200
    })
})
router.get('/send', (req, res) => {
    res.json({
        message: "use post method",
        status: 200
    })
})
router.post('/send', async (req, res) => {
        const requestData = {
            username: req.body.username,
            password: req.body.password,
            host: req.body.host,
            port: req.body.port,
            secure: req.body.secure === "ssl" ? true : false,
            from: req.body.from,
            name: req.body.name,
            to: req.body.to,
            subject: req.body.subject,
            body: req.body.body,
        }
        try {
            const mailSent = await mailer(requestData).catch(console.error)
        res.status(201).json({
            message: mailSent,
            status: 201
        })
        } catch (err) {
            res.status(400).json({
                message: err,
                status: 400
            })
        }
})

module.exports = router
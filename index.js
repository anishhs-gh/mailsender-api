const express = require('express')

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({
        message: "api is running at /api/send",
        status: 200
    })
})

const apiRoutes = require('./routes/send')
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
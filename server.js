const express = require("express")
const path = require("path")
const compression = require('compression')
const morgan = require('morgan')
const app = express()

const configs = {
    caminho: "build",
    forcarHTTPS: true,
    port: process.env.PORT || 8000
}

if (configs.forcarHTTPS)
    app.use((req, res, next) => {
        if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
            res.redirect(`https://${req.headers.host}${req.url}`)
        else
            next()
    })

app.use(compression())
app.use(morgan('tiny'))
app.use(express.static(configs.caminho))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"))
})

app.listen(configs.port)

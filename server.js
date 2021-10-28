const express = require('express')
var fs = require('fs')
const app = express()
const port = 50017

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(
    express.json()
)

app.get('/*', (req, res) => {
    method = req.method
    url = req.url,
    headers = req.headers
    body = req.body
    log = {
        method: method,
        url: url,
        headers: headers,
        body: body,
        timestamp: new Date()
    }
  res.send('')
  fs.appendFile('mynewfile1.txt', "\n" + JSON.stringify(log, null, 2), function (err) {
    if (err) throw err
  })
})

app.post('/*', (req, res) => {
    console.log(req)
    log = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        timestamp: new Date()
    }
  res.send('')
  fs.appendFile('mynewfile1.txt', "\n" + JSON.stringify(log, null, 2), function (err) {
    if (err) throw err
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
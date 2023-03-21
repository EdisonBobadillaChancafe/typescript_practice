//Node http

const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req: any, res: any) {
    res.send('Hello Word')
})
app.get('/homepage', function (req: any, res: any) {
    res.send('Hello Word2')
})

app.get('/*', function (req: any, res: any) {
    res.send('No encontrado')
})
app.listen(8081)
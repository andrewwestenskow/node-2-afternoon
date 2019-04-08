const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build/'))

let MsgCtrl = require('./controllers/messages_controller')

app.get('/api/messages', MsgCtrl.read)
app.post('/api/messages', MsgCtrl.create)
app.put('/api/messages/:id', MsgCtrl.update)
app.delete('/api/messages/:id', MsgCtrl.delete)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
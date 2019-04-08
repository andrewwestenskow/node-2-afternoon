let messages = []
let id = 0
let name = require('os').userInfo().username


module.exports = {
  create: (req, res) => {
    let body = req.body
    console.log(body)
    let message = {
      name: body.name,
      text: body.text,
      time: body.time,
      id: id
    }
    id++
    messages.push(message)
    res.send(messages)
  },

  read: (req, res) => {
    res.send(messages)
  },

  update: (req, res) => {
    let {text} = req.body
    let newId = req.params.id
    let index = messages.findIndex(message => +message.id === +newId)
    let message = messages[index]
    // console.log(req.body)
    messages[index] = {
      name: name,
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    
    res.send(messages)
  },

  delete: (req, res) => {
    let newId = req.params.id
    let index = messages.findIndex(message => +message.id === +newId)
    messages.splice(index, 1)
    res.send(messages)
  }
}
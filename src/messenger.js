const smsProvider = require('./smsProvider')

function sendMessage(message) {
    smsProvider.send(message)
}

module.exports = {
    sendMessage: sendMessage
}
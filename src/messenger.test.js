const messenger = require('./messenger')
const smsProvider = require('./smsProvider')

describe('messenger', () => {
    it('delegates the message to sms provider', () => {
        smsProvider.send = jest.fn()

        messenger.sendMessage('Hello, how are you!')

        expect(smsProvider.send).toHaveBeenCalledWith('Hello, how are you!')
    })
})
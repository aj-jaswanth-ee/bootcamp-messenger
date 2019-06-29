const smsProvider = require('./smsProvider')

describe('sms provider', () => {
    it('logs the message', () => {
        console.log = jest.fn()

        smsProvider.send('I am fine.')

        expect(console.log).toHaveBeenCalledWith('I am fine.')
    })
})
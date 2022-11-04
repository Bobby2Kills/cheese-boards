const User = require('../models/user.model')
const db = require('../db/db')

describe('User', () => {
    beforeAll(async() => {
        await db.sync({force: true})
    })
test('a user has a name and email', async () => {
    const user = await User.create({name: 'Bob', email: 'test@test.com'})
    console.log(user)
    expect(user.name).toBe('Bob')
    expect(user.id).toBeTruthy()
    expect(user.email).toBe('test@test.com')
})
})
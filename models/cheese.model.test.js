const Cheese = require('../models/cheese.model')
const db = require('../db/db')

describe('Cheese', () => {
    beforeAll(async() => {
        await db.sync({force: true})
    })
test('cheese has a title and a description', async () => {
    const cheese = await Cheese.create({title: 'St Agur', description: 'a salty blue, crumbly as it is creamy'})
    console.log(cheese)
    expect(cheese.title).toBe('St Agur')
    expect(cheese.id).toBeTruthy()
    expect(cheese.description).toBeTruthy()
})
})
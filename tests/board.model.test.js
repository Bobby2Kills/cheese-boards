const Board = require('../models/board.model')
const db = require('../db/db')

describe('Board', () => {
    beforeAll(async() => {
        await db.sync({})
    })
test('board has a title and a description', async () => {
    const board = await Board.create({type: 'European', description: 'continental cheese selection from across Europe', rating: 'A++'})
    console.log(board)
    expect(board.type).toBe('European')
    expect(board.description).toBeTruthy()
    expect(board.rating).toBe('A++')
})
})
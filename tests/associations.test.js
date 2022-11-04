const { Board, Cheese, User} = require('../models/index.js')
const db = require('../db/db')



describe('Index', () => {
    beforeAll(async() => {
        await db.sync({force: true})
    })
    
    // const makeItBaby = async () => {
    // const user1 = await User.create({name: 'Lionel', email: 'Lionel.smells@gmail.com' })
    //     const board1 = await Board.create({type: 'South American', description: 'continental cheeses from South America', rating: 'B-'})
    //     const cheese1 = await Cheese.create({title: 'Brie', description: 'creamy, goes well with savoury or sweet'})
    //     const cheese2 = await Cheese.create({title: 'Babybel', description: 'pack your running trainers'})
    //     const cheese3 = await Cheese.create({title: 'Red Leicester', description: 'orange in colour but not in taste, a working-class staple'})
        

    // await board1.addCheeses([cheese1, cheese2, cheese3])
    // await user1.addBoard(board1)

    // }


   
    test('Association tests', async () => { //what's going on??!?!? - why doesn't findAll work?
        
        /******** creating */
        const user1 = await User.create({name: 'Lionel', email: 'Lionel.smells@gmail.com' })
        const board1 = await Board.create({type: 'South American', description: 'continental cheeses from South America', rating: 'B-'})
        const cheese1 = await Cheese.create({title: 'Brie', description: 'creamy, goes well with savoury or sweet'})
        const cheese2 = await Cheese.create({title: 'Babybel', description: 'pack your running trainers'})
        const cheese3 = await Cheese.create({title: 'Red Leicester', description: 'orange in colour but not in taste, a working-class staple'})
        await board1.addCheese([cheese1, cheese2, cheese3])
        await user1.addBoard(board1)
        // await cheese1.addBoard(board1) - Bernard said I don't need to do this the other way around as the one above should be enough to link them. However, the test passes if I uncomment this line.

         /******** test user association*/
        const userJoin = await User.findByPk(1, {include: [{ model: Board, include: [{ model: Cheese }]}]})
        const checkUser = userJoin.toJSON();
        console.log(checkUser)
        expect(await checkUser.Boards.length).toBe(1)

        /******** test board association */
        const boardJoin = await Board.findByPk(1,{include: { model: Cheese }})
        const checkBoard = await boardJoin.toJSON();
        console.log(checkBoard)
        expect(await checkBoard.Cheeses.length).toBe(3)

         /******** test cheese association */
        const cheeseJoin = await Cheese.findByPk(1, {include: { model: Board }})
        const checkCheese = cheeseJoin.toJSON();
        console.log(checkCheese)
        expect(await checkCheese.Boards.length).toBe(1) //why does .Board only fail this test? but .Boards fails my board.model.test too (unless I remove 'await' from the json line? Only works with length = 0
    })
})

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


   
    test('A user can be loaded with its boards', async () => { //what's going on??!?!? - checking await User.findall to User.findByPk has for some reason broken the user.model.test too
        const user1 = await User.create({name: 'Lionel', email: 'Lionel.smells@gmail.com' })
        const board1 = await Board.create({type: 'South American', description: 'continental cheeses from South America', rating: 'B-'})
        const cheese1 = await Cheese.create({title: 'Brie', description: 'creamy, goes well with savoury or sweet'})
        const cheese2 = await Cheese.create({title: 'Babybel', description: 'pack your running trainers'})
        const cheese3 = await Cheese.create({title: 'Red Leicester', description: 'orange in colour but not in taste, a working-class staple'})
        await board1.addCheese([cheese1, cheese2, cheese3])
        await user1.addBoard(board1)

        const userJoin = await User.findByPk(1, {include: [{ model: Board, include: [{ model: Cheese}]}]})
        const checkUser = userJoin.toJSON();
        console.log(checkUser)
    
    
        expect(await checkUser.Boards.length).toBe(1)
    })

})
const { Model, DataTypes } = require(`sequelize`)
const db = require(`../db/db`)

class Board extends Model { }


module.exports = Board

Board.init({
    type: {
        type:DataTypes.STRING,
    },
    description: {
        type:DataTypes.STRING,
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, { sequelize: db }
)
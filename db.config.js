const mongoose = require("mongoose")


exports.ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://muntazeem:mintmongo@mernstackmint.fy2gd.mongodb.net/Mern_Stack')
        console.log(`Mongo db is connected with ${mongoose.connect.host}`)
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)

    }
}


// muntazeem    mintmongo

// mongodb + srv://muntazeem:<password>@mernstackmint.fy2gd.mongodb.net/?retryWrites=true&w=majority&appName=mernStackMint
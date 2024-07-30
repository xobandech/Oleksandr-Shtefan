// So what i know about CRUD, CRUD - Create, Read, Update and Delete
// First i will initialize app, 
// Then create controller and a service functions 
// Also i need a database, i will use MongoDB free tier cluster

// For initializing TS Express app i used this guide: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

const bootstrap = async () => {
    process.env.MONGO_URI && await mongoose.connect(process.env.MONGO_URI)


    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

bootstrap()

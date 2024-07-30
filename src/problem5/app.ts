// So what i know about CRUD, CRUD - Create, Read, Update and Delete
// First i will initialize app, 
// Then create controller and a service functions 
// Also i need a database, i will use MongoDB free tier cluster

import mongoose from "mongoose"
import { env } from "process"

// For initializing TS Express app i used this guide: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const bootstrap = async () => {
    //@ts-ignore
    await mongoose.connect(process.env.MONGO_URI)
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

bootstrap()

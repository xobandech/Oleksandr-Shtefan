/* 
/ Time spend: ~1h
/ So what i know about CRUD, CRUD - Create, Read, Update and Delete
/ First i will initialize app, 
/ Then create controller and a service functions 
/ Also i need a database, i will use MongoDB free tier cluster

/ For initializing TS Express app i used this guide: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
*/
import mongoose, { Schema } from "mongoose"
import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

export interface IResource extends Document {
    name: string;
    age: number;
}

const ResourceSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

const Resource = mongoose.model<IResource>('Resource', ResourceSchema)

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req: Request, res: Response) => {
    try {
        const resources = await Resource.find()
        res.json(resources)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/:id', async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findById(req.params.id)
        res.json(resource)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/', async (req: Request, res: Response) => {
    try {
        const resource = new Resource(req.body)
        await resource.save()
        res.json(resource)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

app.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedResource = await Resource.findByIdAndUpdate({
            _id: req.params.id
        }, req.body, { new: true })
        return updatedResource
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

app.delete('/:id', async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id)
        res.json(resource)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

const bootstrap = async () => {
    process.env.MONGO_URI && await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

bootstrap()

function createSampleResources() {
    const resources = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: 24 },
        { name: 'John Smith', age: 30 },
        { name: 'Jane Smith', age: 28 },
        { name: 'John Johnson', age: 5 },
        { name: 'Jane Johnson', age: 33 },
    ]

    Resource.insertMany(resources)
}
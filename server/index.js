const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = await client.db("animal-kingdom").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const animalCollection = client.db("animal-kingdom").collection("animals");

        app.post('/animals', async (req, res) => {
            const animal = req.body;
            const result = await animalCollection.insertOne(animal);
            res.send(result);
        });


        app.get('/animals', async (req, res) => {
            const result = await animalCollection.find().toArray();
            res.send(result);
        });



    } catch (error) {
        console.log(error);
    } finally {

        await client.close();
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

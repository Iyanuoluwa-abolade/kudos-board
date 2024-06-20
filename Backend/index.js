import express from 'express';
import bodyParser from 'body-parser';
// import pg from 'pg';
import cors from 'cors';
import env from 'dotenv';
import {PrismaClient} from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();
env.config();

// const db = new pg.Client ({
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

async function getGif(category) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${category}&rating=g`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
    const gifData = await response.json();
    const gifUrl = gifData.data.images.original.url;


    return gifUrl;
}

app.get('/', async (req, res) => {

    res.send(`Hello World!`);

});

app.get ("/boards", async (req, res) => {
    try {
        const boards = await prisma.board.findMany();

        console.log(boards)
        res.json(boards)

    } catch(err) {
        res.status(500).json({err: 'Internal Server Error'})
    }
});

app.post("/boards", async (req, res) => {
    const {title, category, author} = req.body;
    const image_url = await getGif(category);
    try{
        const newBoard = await prisma.board.create({
            data: {
                title,
                category,
                image_url
            }
        })
        res.json(newBoard);

    } catch (err) {
        res.status(500).json({err: 'Internal Server Error'})

    }
});

app.post('/books', async (req, res) => {
    const { title, author, genre } = req.body
    const newBook = await prisma.book.create({
      data: {
        title,
        category,
        image_url
      }
    })
    res.json(newBook)
  })


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
} );













// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`)
// } );


// const {PrismaClient} = require('@prisma/client')
// const prisma = new PrismaClient()

// const express = require('express')
// const app = express()
// const PORT = 3003

// app.use(express.json())

// app.get('/board',async (req, res) => {
//     // const id = paarseInt()
//     const board = await prisma.board.findMany()
//     res.json(board)
// })

// app.post ('/board', async (req, res) => {
//     const {title, category} = req.body
//     const newBoard = await prisma.board.create({
//         data: {
//             title,
//             category
//         }
//     })
//     res.json(newBoard)
// })

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

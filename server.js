const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./models/Movie');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/movies', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/movies', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const movies = await Movie.find()
                                .limit(Number(limit))
                                .skip((Number(page) - 1) * Number(limit))
                                .exec();
        const count = await Movie.countDocuments();
        res.status(200).send({
            movies,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page)
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send();
        }
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).send();
        }
        res.status(200).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).send();
        }
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/movies/search/:name', async (req, res) => {
    try {
        const movies = await Movie.find({ name: new RegExp(req.params.name, 'i') });
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

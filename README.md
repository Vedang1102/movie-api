# Movie API

This project is a RESTful API server built with Node.js and Express.js that provides CRUD (Create, Read, Update, Delete) operations for managing a collection of movies. MongoDB is used as the database for storing movie data. 

## Features

- **Create**: Add a new movie to the collection.
- **Read**: Retrieve a list of all movies, with pagination support.
- **Update**: Update details of an existing movie.
- **Delete**: Remove a movie from the collection.
- **Search**: Search for movies by name.

## Endpoints

- **POST /movies**: Create a new movie.
- **GET /movies**: Retrieve all movies with pagination.
- **GET /movies/:id**: Retrieve a single movie by its ID.
- **PUT /movies/:id**: Update a movie by its ID.
- **DELETE /movies/:id**: Delete a movie by its ID.
- **GET /movies/search/:name**: Search for movies by name.

## Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.
- Postman or any other tool to test API endpoints.

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Vedang1102/movie-api.git
    cd movie-api
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start MongoDB:**

    Make sure your MongoDB server is running. By default, the application connects to `mongodb://localhost:27017/movies`.

4. **Populate initial data:**

    ```sh
    node populate.js
    ```

5. **Start the server:**

    ```sh
    node server.js
    ```

    The server will start running at `http://localhost:3000`.

## Usage

You can use Postman or any other API testing tool to interact with the API. Here are some example requests:

- **Create a new movie:**

    POST /movies

    ```json
    {
        "name": "New Movie",
        "img": "https://example.com/new-movie.jpg",
        "summary": "This is a summary of the new movie."
    }
    ```

- **Get all movies (with pagination):**

    GET /movies?page=1&limit=10

- **Get a movie by ID:**

    GET /movies/:id

- **Update a movie by ID:**

    PUT /movies/:id

    ```json
    {
        "name": "Updated Movie Name",
        "img": "https://example.com/updated-movie.jpg",
        "summary": "This is an updated summary."
    }
    ```

- **Delete a movie by ID:**

    DELETE /movies/:id

- **Search for movies by name:**

    GET /movies/search/:name

## Project Structure

- **server.js**: The main file that sets up the Express server and routes.
- **db.js**: Handles the connection to MongoDB.
- **models/Movie.js**: Defines the schema and model for a movie.
- **populate.js**: Script to populate the database with initial data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

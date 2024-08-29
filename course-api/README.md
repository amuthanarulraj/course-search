# Course API

A simple demo REST API for managing courses.

## Development

1. Create a `.env` file inside course-api directory and add below content. Replace `<MONGO_CONNECTION_STRING>` with the Mongo Atlas connection URL.

    ```sh
    SERVER_PORT=3002
    MONGO_CONNECTION=<MONGO_CONNECTION_STRING>
    ```

2. Run `npm i`.
3. Run `npm start`.
4. The Course REST API should be accessible at `http://localhost:3002/courses`. Use HTTP clients like [httpie](https://httpie.io/) for accessing the API.

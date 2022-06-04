//requiring express package to start the program in a port
import express from 'express';

//to take in incoming post request bodies
import bodyParser from 'body-parser';

//to use user get, post, patch, and delete methods import users routes (middleware?)
import usersRoutes from './routes/users.js'

//using express create an app to reference the express
const app = express();

const PORT = 5000;

//to use json formatted data in whole application
app.use(bodyParser.json());

//to use all routes starting with /users extension
app.use('/users', usersRoutes);

//start the application on port 3000
app.listen(PORT, () => {console.log(`Server running on port: http://localhost:${PORT}`)});

app.get('/', (req, res) => {
    console.log("----------------HELLO WORLD------------------");
    res.send("Welcome from the homepage");
})
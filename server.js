//requiring express package to start the program in a port
import express from 'express';

//to take in incoming post request bodies
import bodyParser from 'body-parser';

//to use user get, post, patch, and delete methods import users routes (middleware?)
import usersRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'

//to use cors in the whole application
import cors from 'cors';

//to use mongodb extension in the project
import mongoose from 'mongoose'

//using express create an app to reference the express
const app = express();


//to use json formatted data in whole application
app.use(bodyParser.json( { limit: "30mb", extended: true } ));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true } ));
app.use(cors());



//------------------------------ MONGODB CONNECTION -----------------------------------
const CONNECTION_URL = 'mongodb+srv://onatpostaci:onat992009@cluster0.q8ptz.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error.message)); 
//mongoose.set('useFindAndModify', false);
//------------------------------ MONGODB CONNECTION -----------------------------------


//to use all routes starting with /users extension
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
    console.log("----------------HELLO WORLD------------------");
    res.send("Welcome from the homepage");
})

app.listen(PORT, () => {console.log(`Server running on port: http://localhost:${PORT}`)})
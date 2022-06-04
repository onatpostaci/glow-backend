//requiring express package to start the program in a port
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

//all routes here are starting with /users

/* ROUTER TO GET ALL USERS IN THE SYSTEM */
router.get('/', (req, res) =>{
    res.send(users);
});

/* ROUTER TO INSERT A USER INTO THE SYSTEM */
router.post('/', (req, res) =>{
   // users.push(req.body)
   const user = req.body;
   users.push( { ...user, id:uuidv4() } );

   res.send(`User with name ${user.firstName} has been added to the system!`)
});

/* ROUTER TO GET A SPECIFIC USER FROM THE SYSTEM */
router.get('/:id', (req, res) =>{
    const { id } = req.params; 
    const foundUser = users.find( (user) => user.id == id );
    res.send(foundUser);
});

/* ROUTER TO DELETE A SPECIFIC USER FROM THE SYSTEM */
router.delete('/:id', ( req , res ) => {
    const { id } = req.params;
    users = users.filter( (user) => user.id != id );
    res.send(`User with the id ${id} has been deleted from the system!`);
});

/* ROUTER TO UPDATE A SPECIFIC USER IN THE SYSTEM */
router.patch('/:id', ( req , res ) => {
    const { id } = req.params;
    const { firstName, surName, age } = req.body;
    const user = users.find( (user) => user.id == id );

    if(firstName){
        user.firstName = firstName;
    }

    else if(surName){
        user.surName = surName;
    }

    else if(age){
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated!`);
});

export default router;

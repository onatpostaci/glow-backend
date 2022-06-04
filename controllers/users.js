import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) =>{
    res.send(users);
};

export const createUser = (req, res) =>{
    // users.push(req.body)
    const user = req.body;
    users.push( { ...user, id:uuidv4() } );
 
    res.send(`User with name ${user.firstName} has been added to the system!`)
 };

 export const getUserById = (req, res) =>{
    const { id } = req.params; 
    const foundUser = users.find( (user) => user.id == id );
    res.send(foundUser);
};

export const deleteUser = ( req , res ) => {
    const { id } = req.params;
    users = users.filter( (user) => user.id != id );
    res.send(`User with the id ${id} has been deleted from the system!`);
};

export const updateUser = ( req , res ) => {
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
};
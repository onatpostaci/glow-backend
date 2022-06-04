//requiring express package to start the program in a port
import express from 'express';
import {getUsers, createUser, getUserById, deleteUser, updateUser} from '../controllers/users.js'

const router = express.Router();

//all routes here are starting with /users

/* ROUTER TO GET ALL USERS IN THE SYSTEM */
router.get('/', getUsers);

/* ROUTER TO INSERT A USER INTO THE SYSTEM */
router.post('/', createUser);

/* ROUTER TO GET A SPECIFIC USER FROM THE SYSTEM */
router.get('/:id', getUserById);

/* ROUTER TO DELETE A SPECIFIC USER FROM THE SYSTEM */
router.delete('/:id', deleteUser);

/* ROUTER TO UPDATE A SPECIFIC USER IN THE SYSTEM */
router.patch('/:id', updateUser);

export default router;

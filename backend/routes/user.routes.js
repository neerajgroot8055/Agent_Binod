import { Router } from "express";

import * as userController from '../controllers/user.controller.js'
import { body } from "express-validator";
const router = Router();

router.post('/register', 
    body('email').isEmail().withMessage('Email must be valid .'),
    body('password').isLength({min :3}).withMessage('Pass must be bigger than 3 chars'),
    userController.createUserController) ;


export default router ;
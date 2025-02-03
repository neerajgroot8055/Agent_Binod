import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const express = express();

application.use(express.json()) ;
application.use(express.urlencoded({extended : true})) ;

application.get('/',(req,res) =>{
    res.send('Hello World');
});

export default app ;
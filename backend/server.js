import http from 'http';
import 'dotenv/config';

import app from './app.js'

const port = process.env.PORT || 3000 ;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Sever is Running on Port ${port}`);

})
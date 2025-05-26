// const express = require('express');   // older importing style
import { error } from 'console';
import express from 'express'; // modern ES6 importing style
import path , {dirname} from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'; // Importing the auth routes
import todoRoutes from './routes/todoRoutes.js'; // Importing the todo routes


const app = express();
const PORT = process.env.PORT || 5000;

// Get the file path from teh URL of the current module.

let ___filename = fileURLToPath(import.meta.url);

//Get the directory name from the file path
let ___dirname = dirname(___filename);

//middleware--------------------------------------------------------------
app.use(express.json()); // to parse JSON data from the request body

// it will give an error so for that we have to use middleware to serve static files
//Serves the HTML file from the public directory
//tells express to serve all files from the 'public' directory as static files
app.use(express.static(path.join(___dirname, '../public')));


app.use('/auth', authRoutes);
app.route('/todos',todoRoutes)

//serving up the html file 
app .get('/', (req, res) => {
    res.sendFile(path.join(___dirname, 'public', 'index.html'));
})


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});

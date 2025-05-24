
// the address of this server is connected to the network is 
//  URL-> http://localhost:8383
// the port number is 8383
// IP => 127.0.0.1:8383
//----------------------------------------------------------------------------------------
// Importing the express module to create a web server


const express = require('express');  //first import express into our file
const app = express();  //create an instance of express which is a function
const PORT = 8383;  //define a port number where the server will listen


//----------------------------------------------------------------------------------------

// HTTP VERBS (Methods) && Routes Or Endpoints
//The methods are used to define the type of request being made to the server.
// Common HTTP methods include:
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
// Routes are the paths that the server listens to for incoming requests.
// Here we define a route for the root URL ("/") using the GET method


// The app.get() method is used to define a route for the GET request

//website endpoints (these endpoints are used for sending back html and they typically come when a user enters a url in a browser) also KNown as Visual Endpoints

app.get('/', (req, res) => {  //define a route for the root URL

    //this is the endpoint number 1 -/
    res.sendStatus(201);  //set the status code of the response to 200 (OK)
    // res.send(`Hello World! Testing the routes`);  //send a response when the root URL is accessed
});

app.get('/dashboard', (req, res) => {
    //this is the endpoint number 2 -/dashboard
    res.send(`Welcome to the Dashboard!`);  //send a response when the /dashboard URL is accessed
})


// sending a website to the client

app.get('/website', (req, res) => {
    //this is the endpoint number 3 -/website
    res.send(`<h1>HI Sending Input </h1> <input/>`);  //send the index.html file as a response when the /website URL is accessed
})

//----------------------------------------------------------------------------------------

// API Endpoints (these endpoints are used for sending back data in JSON format and they typically come when a user makes an API call from a frontend application or a mobile application)

let data = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
    
};


//----------------------------------------------------------------------------------------
// Middleware
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// They can perform operations on the request and response objects, modify them, or end the request-response cycle.
app.use(express.json());  //middleware to parse JSON data in the request body


app.get('/api/data', (req,res)=>{
      console.log("API Endpoint Hit");  //log a message to the console when the /api/data URL is accessed
    res.send(data);  //send the data object as a response when the /api/data URL is accessed

})

// Different Types of HTTP Methods
// 1. GET - Used to retrieve data from the server which is already defined above
// 2. POST - Used to send data to the server
app.post('/api/data', (req, res) => {
    //this is the endpoint number 4 -/api/data
    
    //for example someone want to create a new entry in the database which is signup  when they click on the sign up button 
    //the user fill there credentials and hit the signup button then this request will call to send the data to DB or the Server
    
    const newEntry = req.body;  //get the data sent in the request body

    console.log("POST Request Received");  //log a message to the console when the /api/data URL is accessed with a POST request
    // res.sendStatus(201);  //set the status code of the response to 201 (Created)
    console.log("New Entry:", newEntry);  //log the new entry data to the console
    res.send({ message: "Data received successfully!" });  //send a response when the /api/data URL is accessed with a POST request
});

// 3. PUT - Used to update existing data on the server
app.put('/api/data', (req, res) => {
    //this is the endpoint number 5 -/api/data
    console.log("PUT Request Received");  //log a message to the console when the /api/data URL is accessed with a PUT request
    res.send({ message: "Data updated successfully!" });  //send a response when the /api/data URL is accessed with a PUT request
});

// 4. DELETE - Used to delete data from the server
app.delete('/api/data', (req, res) => {
    //this is the endpoint number 6 -/api/data
    console.log("DELETE Request Received");  //log a message to the console when the /api/data URL is accessed with a DELETE request
    res.send({ message: "Data deleted successfully!" });  //send a response when the /api/data URL is accessed with a DELETE request
});

// 5. PATCH - Used to partially update existing data on the server
app.patch('/api/data', (req, res) => {
    //this is the endpoint number 7 -/api/data
    console.log("PATCH Request Received");  //log a message to the console when the /api/data URL is accessed with a PATCH request
    res.send({ message: "Data partially updated successfully!" });  //send a response when the /api/data URL is accessed with a PATCH request
});
// 6. OPTIONS - Used to describe the communication options for the target resource
app.options('/api/data', (req, res) => {
    //this is the endpoint number 8 -/api/data
    console.log("OPTIONS Request Received");  //log a message to the console when the /api/data URL is accessed with an OPTIONS request
    res.send({ message: "Available options for this resource!" });  //send a response when the /api/data URL is accessed with an OPTIONS request
});
// 7. HEAD - Used to retrieve the headers of a resource
app.head('/api/data', (req, res) => {
    //this is the endpoint number 9 -/api/data
    console.log("HEAD Request Received");  //log a message to the console when the /api/data URL is accessed with a HEAD request
    res.sendStatus(200);  //send a response with a status code of 200 (OK) when the /api/data URL is accessed with a HEAD request
});


//----------------------------------------------------------------------------------------

// Port Listening should be at the end of the file because we have to configure the app to listen to a specific port
// The app.listen() method is used to start the server and listen for incoming requests on the specified ports
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  //log a message to the console when the server starts
})
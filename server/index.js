const express = require('express');

express()

    .use(express.json())

    // GET HOME
    .get("/home", (req, res) => {
        res.status(200).json({status: 200, message: "Hello this is the demo server response to the fetch GET request"});
    })

    // POST HOME
    .post("/home", (req, res) => {
        console.log(req.body);
        res.status(200).json({status: 200, message: `Fetch POST data received successfully - ("${req.body.userInput}")` });
    })

    .listen(8000);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Express.
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// MongoDB.
const uri = process.env.ATLAS_URI; // read from config
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Routers.
const companyRouter = require('./routes/company');
app.use('/company', companyRouter);

const interviewRouter = require('./routes/interview');
app.use('/interview', interviewRouter);

// Run the server.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
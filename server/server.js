const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const randomize = require('randomatic');
require('dotenv').config;

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB:
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const uri = `mongodb+srv://${user}:${password}@${cluster}.ait53.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(``);

const User = mongoose.model('User', {
    email: String,
    password: String,
    otp: String,
});


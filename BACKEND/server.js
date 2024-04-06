const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection error:'));
connection.once('open', () => {
    console.log("Connection to MongoDB established successfully :)");
});

// Require routers
const orderRouter = require('./routes/orderCRUD'); 

// Mount routers without prefix
app.use('/order', orderRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

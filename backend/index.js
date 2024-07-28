const express = require('express');
const app = express();
const dotenv = require('dotenv');
const DBconnection = require('./config/DbConnect');
// const cors = require('cors');

// app.use(cors());


dotenv.config();
DBconnection();

// Import route files
const loginRoute = require('./routes/LoginRoute.route');

const signupRoute = require('./routes/signUpRoute.route');
const AdminRoute=require('./routes/AdminRoute.route');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('API is running');
});

// Set base endpoint for all routes
app.use('/login',loginRoute);
app.use("/signup",signupRoute)

app.use('/admin',AdminRoute)



const PORT = process.env.PORT || 3128;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
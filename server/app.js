const express = require('express')
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const cors = require("cors");
const db = require('./config/db.config')
const PORT = process.env.PORT || 8080;
const authRoutes = require('./routes/auth.routes');
const { restaurantRoutes, managerRoutes } = require('./routes/manager.routes');
const usersRoutes = require('./routes/users.routes')
const AdminsRoutes = require('./routes/admin.routes')
const app = express()
dotEnv.config();


//!  connection to the database

db(process.env.DB_URL);



const corsOptions = {
    origin: "http://localhost:19006/",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/auth/users', authRoutes)

app.use('/users', usersRoutes) //! users routes
app.use('/admin', AdminsRoutes);

app.use('/manager', managerRoutes)

app.use('/manager/settings', restaurantRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



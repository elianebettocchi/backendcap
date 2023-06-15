const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, })

// Middleware
app.use(cors());
app.use(express.json());

// view engine
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully");
})

// Routes
// const artsRouter = require('../backend/routes/arts')
// const familyRouter = require('../backend/routes/family')
// const foodRouter = require('../backend/routes/food')
// const historyRouter = require('../backend/routes/history')
// const outdoorsRouter = require('../backend/routes/outdoors')
// const sportsRouter = require('../backend/routes/sports')
   const attractionsRouter = require('./routes/attractions')

// app.use('/arts', artsRouter)
// app.use('/family', familyRouter)
// app.use('/food', foodRouter)
// app.use('/history', historyRouter)
// app.use('/outdoors', outdoorsRouter)
// app.use('/sports', sportsRouter)
   app.use('/attractions', attractionsRouter) 

// app.get('*', checkUser);
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
// app.use(authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



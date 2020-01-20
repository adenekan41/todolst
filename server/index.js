const express = require('express'); 
const connectDB = require('./config/db');


const app = express();

// Connect Database
connectDB()

// Init Middileware
app.use(express.json({ extended:false }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.get('/', (req,res) => res.send('API RUNNING'));

// Define Routes
app.use('/api/todos', require('./routes/api/todos'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`))

const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb://codewonders:24Junewondex@ds211269.mlab.com:11269/todoapp";

const connectDB = async () => {
   try {
     await mongoose.connect(db, {
     	useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify:false
     });

     console.log('Mongo Db Connected.....')
   }catch(err) {
     console.error(err.message);

     // Exit Process If Faliure
     porcess.exit(1)
   }
}


module.exports = connectDB

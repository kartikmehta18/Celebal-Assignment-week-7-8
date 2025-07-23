const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`Database connection error: ${err.message}`);
      console.log(`Please ensure MongoDB is running or set up MongoDB Atlas connection`);
      console.log(`Visit https://www.mongodb.com/atlas to create a free cluster`);
      console.log(`Continuing without database connection...`);
      
      // Set mongoose connection state manually to prevent app crashes
      mongoose.connection.readyState = 1;
    });
};

module.exports = connectDatabase;

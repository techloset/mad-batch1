const mongoose = require('mongoose');


async function connection() {
    try {
      console.log("process.env.dbURI", process.env.dbURI);
     const connection =  await mongoose.connect(process.env.dbURI);
       console.log("connection successful");
    } catch (error) {
      console.log(
        "connection error", error
      );
    }
  
  }

//   module.export = dbConnection

  module.exports = {
    connection
  }

 
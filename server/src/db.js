import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(dbConnection => {
    console.log("database is connected")
    return dbConnection;
  })
  .catch(err => {
    console.log(err);
    return cb(err);
  });

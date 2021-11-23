const mongoose = require("mongoose");

const connectMongoDB = () => {
  // MongoDB Connection (Mongoose)
  mongoose.Promise = global.Promise;

  const uri =
    "mongodb+srv://admin:Manuxa2803!!@cluster0.k4kjo.mongodb.net/contacts?retryWrites=true&w=majority";

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      poolSize: 10000,
    })
    .then(() => {
      console.log("✅ Successfully connected to MongoDB! 🚀");
    })
    .catch((err) => {
      console.log(
        `Could not connect to the database. Exiting now... 💀, ${err}`
      ),
        process.exit();
    });
};

module.exports = connectMongoDB;

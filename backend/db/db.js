const mongoose = require("mongoose");
function connectionToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => console.log(err));
}
module.exports = connectionToDb;

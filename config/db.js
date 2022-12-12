const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://elad_aviv23:J9XCLm5GL3Xz0XP8@cluster0.cg22keq.mongodb.net/?retryWrites=true&w=majority"
    // const uri = "mongodb://localhost/shoppingBack";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;

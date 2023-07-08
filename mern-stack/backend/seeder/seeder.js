require("dotenv").config();
const connectDB = require("../config/db");
connectDB();

const categoryData = require("./categories");


const Category = require("../models/CategoryModel");


const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Category.collection.deleteMany({});


    if (process.argv[2] !== "-d") {
      await Category.insertMany(categoryData);

      console.log("Seeder data imported successfully");
      process.exit();
      return
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();

// import mongoose from "mongoose";
// export default mongoose.Schema({
//     _id: String,
//     id: String,
//     name: String,
//     description: String,
//     course: String,
//     lessons: String
// },
// {collection: "modules"}
// );



import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    description: String,
    author: String,
  },
  { collection: "modules" }
);
export default schema;







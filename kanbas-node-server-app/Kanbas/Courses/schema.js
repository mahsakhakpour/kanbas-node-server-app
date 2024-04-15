// import mongoose from "mongoose";
// export default mongoose.Schema({    
// id: String,
// name: String,
// number:String,
// startDate:Date,
// endDate: Date,
// department: String,
// credits: Number,
// description:String
// },
// {collection: "courses"}
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
  { collection: "courses" }
);
export default schema;










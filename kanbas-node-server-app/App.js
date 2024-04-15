import "dotenv/config";
import session from "express-session";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/ModuleRoutes.js";
import AssignmentRoutes from './Kanbas/Assignments/AssignmentRoutes.js';
import cors from "cors";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(cors({
  credentials: true,
  origin: [process.env.FRONTEND_URL, "http://localhost:3000"]
  // origin: process.env.FRONTEND_URL,

})
);


const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions))

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app)
AssignmentRoutes(app)
Lab5(app);
Hello(app)
UserRoutes(app);
const port = process.env.PORT || 4000;
app.listen(port || 4000);

import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/ModuleRoutes.js";
import AssignmentRoutes from './Kanbas/Assignments/AssignmentRoutes.js';

import cors from "cors";

const app = express();
app.use(cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"]
  }));

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app)
AssignmentRoutes(app)
Lab5(app);
Hello(app)
app.listen(process.env.PORT ||4000);
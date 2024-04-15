import * as dao from "./dao.js";
function CourseRoutes(app) {
 
 
  app.get("/api/author/:id/courses", async (req, res) => {
    console.log('Session ID:', req.sessionID);
    console.log('Session data:', req.session);
    const { id } = req.params;
    const courses = await dao.findCoursesByAuthor(id);
    res.json(courses);
  });
 

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    console.log("Fetched all db courses");
    res.json(courses);
  };
 
  app.get("/api/courses", findAllCourses);
 
 

 
  const updateCourse = async (req, res) => {
    
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    console.log("Updated course id==>"+id);
    res.json(status);
  };
 
  app.put("/api/courses/:id", updateCourse);
 

 
  const createCourse = async (req, res) => {
    console.log(req.body)
    const course = await dao.createCourse(req.body);
    console.log("Added course");
    res.json(course);
  };
 
  app.post("/api/courses", createCourse);
 
  

 
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
 
    console.log("deleting course id==>"+req.params.id);
    res.json(status);
  };
 
  app.delete("/api/courses/:id", deleteCourse);
 
 
 
  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    console.log("finding course by id");
    res.json(course);
  };
 
  app.get("/api/courses/:id", findCourseById);
 
 
}
 
export default CourseRoutes;



import * as dao from "./dao.js";
function ModuleRoutes(app) {
 
 
  app.get("/api/author/:id/modules", async (req, res) => { 
    const { id } = req.params;
    const modules = await dao.findModulesByAuthor(id);
    res.json(modules);
  });

  app.get("/api/courses/:id/modules", async (req, res) => { 
    const { id } = req.params;
    const modules = await dao.findModulesForCourse(id);
    res.json(modules);
  });
 

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();  
    res.json(modules);
  }; 
  app.get("/api/modules", findAllModules);  
 
 
 
  const updateModule = async (req, res) => {    
    const { id } = req.params;
    const status = await dao.updateModule(id, req.body);    
    res.json(status);
  }; 
  app.put("/api/modules/:id", updateModule);
 
 
 
  const createModule = async (req, res) => {
    console.log(req.body)
    const module = dao.createModule(req.body);  
    res.json(module);
  }; 
  app.post("/api/modules", createModule);


  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.id); 
    res.json(status);
  };
 
  app.delete("/api/modules/:id", deleteModule); 
  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.id);
    res.json(module);
  }; 
  app.get("/api/modules/:id", findModuleById);
 
 
} 
export default ModuleRoutes;


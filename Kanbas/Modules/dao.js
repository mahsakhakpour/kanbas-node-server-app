
import model from "./model.js";
export const findAllModules = () => model.find();
export const createModule = (module) => 
{
  delete module._id
  model.create(module);
}
 
export const updateModule = (id, module) =>  model.updateOne({ _id: id }, { $set: module });
export const deleteModule = (id) => model.deleteOne({ _id: id }); 
export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModulesByAuthor = (author) => model.find({ author: author });







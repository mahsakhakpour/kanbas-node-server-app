// import courseModel from './model.js';
// export const findAllCourses = () => courseModel.find();
// // export const indCoursesById = (id) => courseModel.findOne({id: id});
// export const findCoursesById = (id) => courseModel.findById({_id: id});
// export const createCourse = (course) => courseModel.create(course);
// export const updateCourse = (id, course) => courseModel.updateOne({_id: id}, {$set: course});
// export const deleteCourse = (id) => courseModel.deleteOne({_id: id});


import model from "./model.js";
export const findAllCourses = () => model.find();
export const createCourse = (course) => 
{
  delete course._id
  model.create(course);
}
 
export const updateCourse = (id, course) =>  model.updateOne({ _id: id }, { $set: course });
export const deleteCourse = (id) => model.deleteOne({ _id: id }); 
export const findCourseById = (courseId) => model.findById(courseId);
export const findCoursesByAuthor = (author) => model.find({ author: author });
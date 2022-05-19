import React from "react";
import { useDispatch } from "react-redux";
import Courses from "../modules/Courses";

const CourseSection = () => {

  const dispatch = useDispatch();

  const filterCourses = async (event) => {
    let category = event.target.innerText;
    category = lowerCaseFirstLetter(category);
    const response = await Courses.index(category);   
    dispatch({ type: "SET_COURSES_LIST", payload: response });
  };

  const lowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  return (
    <ul className="center">
      <li data-cy="workshops-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
      <li data-cy="testing-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
      <li data-cy="vue-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
      <li data-cy="productivity-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
      <li data-cy="node-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
      <li data-cy="react-navigation" className="bold" onClick={filterCourses}>Mmmmmm</li>
    </ul>
  );
};

export default CourseSection;

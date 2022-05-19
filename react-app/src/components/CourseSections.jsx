import React from "react";
import { useDispatch } from "react-redux";
import Courses from "../modules/Courses";

const CourseSections = () => {
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
      <li
        data-cy="workshops-navigation"
        className="bold"
        onClick={filterCourses}
      >
        Workshops
      </li>
      <li data-cy="testing-navigation" className="bold" onClick={filterCourses}>
        Testing
      </li>
      <li data-cy="vue-navigation" className="bold" onClick={filterCourses}>
        Vue
      </li>
      <li data-cy="productivity-navigation" className="bold" onClick={filterCourses}>
        Productivity
      </li>
      <li data-cy="node-navigation" className="bold" onClick={filterCourses}>
        Node
      </li>
      <li data-cy="react-navigation" className="bold" onClick={filterCourses}>
        React
      </li>
    </ul>
  );
};

export default CourseSections;

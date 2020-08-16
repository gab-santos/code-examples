import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCourseAction } from "../../store/actions/Courses.action";

export default function CourseList() {
  const qty = 5;

  const courses = useSelector(state => state.courses.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function addCourses() {
    dispatch(addCourseAction("GraphQL"));
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourses}>
        Adicionar curso
      </button>
    </>
  );
}

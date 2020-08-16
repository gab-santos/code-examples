import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCoursesAction,
  addCourseAction
} from "../store/actions/Courses.action";

export default function CoursesList() {
  const [course, setCourse] = useState("");
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  function addCourse() {
    if (course.trim()) dispatch(addCourseAction(course.toUpperCase()));

    setCourse("");
    document.querySelector("input").focus();
  }

  function getCourses() {
    dispatch(getCoursesAction());
  }

  return (
    <>
      <input value={course} onChange={e => setCourse(e.target.value)} />
      <button type="button" onClick={getCourses}>
        Load Courses
      </button>
      <button type="button" onClick={addCourse}>
        Add Course
      </button>
      <ul>
        {courses.data.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
      {courses.loading && <p>Carregando...</p>}
    </>
  );
}

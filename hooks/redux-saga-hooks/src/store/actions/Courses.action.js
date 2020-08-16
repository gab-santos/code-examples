export function getCoursesAction() {
  return {
    type: "REQUEST_COURSES_LIST"
  };
}

export function addCourseAction(title) {
  return {
    type: "ASYNC_ADD_COURSE",
    payload: {
      title
    }
  };
}

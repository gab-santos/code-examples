// const INITIAL_STATE = { data: [] };

// export default function Courses(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "ADD_COURSE":
//       return {
//         ...state,
//         data: [
//           ...state.data,
//           { id: Math.random(), title: action.payload.title }
//         ]
//       };

//     default:
//       return state;
//   }
// }

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function Courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_COURSES_LIST":
      return { ...state, loading: true };

    case "SUCCESS_COURSES_LIST":
      return {
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: false
      };

    case "FAILURE_COURSES_LIST":
      return { data: [], loading: false, error: true };

    case "ADD_COURSE":
      return {
        data: [
          ...state.data,
          { id: Math.random(), title: action.payload.title }
        ],
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

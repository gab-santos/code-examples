const INITIAL_STATE = {
  data: ["React Native", "ReactJS", "NodeJS"]
};

export default function Courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };

    default:
      return state;
  }
}

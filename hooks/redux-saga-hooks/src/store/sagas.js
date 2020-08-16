// takeEvery - Irá retornar os valores de todas as operações recebidas.
// takeLatest - Se a mesma operação for enviada mais de uma vez, elas serão ignoradas, exceto a última.
// put - Responsável por chamar o reducer e passar uma action para ele.
// call - Responsável para executar ações que retornam promisses (chamadas a APIs, por exemplo).
// select - Executa uma função seletora que irá buscar dados do estado global do Redux

// import { all, takeLatest, delay, put, call, select } from "redux-saga/effects";

// function apiGet(text, length) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text + " DA ROCKETSEAT - " + length);
//     }, 2000);
//   });
// }

// function* asyncAddCourse(action) {
//   try {
//     const courses = yield select(state => state.courses.data);

//     // call(axios.get, '/tools')
//     const response = yield call(apiGet, action.payload.title, courses.length);

//     yield put({ type: "ADD_COURSE", payload: { title: response } });
//   } catch (error) {
//     yield put({ type: "ERROR" });
//   }
// }

// export default function* root() {
//   yield all([
//     // Pegue a action 'ASYNC_ADD_COURSE' e execute a função asyncAddCourse.
//     // Recebe uma action e também os parâmetros dela e pode repassá-los para a função que será executada.
//     takeLatest("ASYNC_ADD_COURSE", asyncAddCourse)
//   ]);
// }

import { all, takeLatest, put, call } from "redux-saga/effects";

function apiGet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 0, title: "REACT NATIVE" },
        { id: 1, title: "REACTJS" },
        { id: 2, title: "REACT HOOKS" },
        { id: 3, title: "REDUX" },
        { id: 4, title: "REDUX SAGA" }
      ]);
    }, 2000);
  });
}

function* getCoursesList() {
  try {
    // call(axios.get, '/tools')
    const response = yield call(apiGet);

    yield put({ type: "SUCCESS_COURSES_LIST", payload: { data: response } });
  } catch (error) {
    yield put({ type: "FAILURE_COURSES_LIST" });
  }
}

function* addCourse(action) {
  yield put({ type: "ADD_COURSE", payload: { title: action.payload.title } });
}

export default function* root() {
  yield all([
    // Pegue a action 'ASYNC_ADD_COURSE' e execute a função asyncAddCourse.
    // Recebe uma action e também os parâmetros dela e pode repassá-los para a função que será executada.
    takeLatest("REQUEST_COURSES_LIST", getCoursesList),
    takeLatest("ASYNC_ADD_COURSE", addCourse)
  ]);
}

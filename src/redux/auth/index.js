import { takeEvery, call, put, select } from "redux-saga/effects";
// import { getToken } from "src/api/auth";
// import { toast } from "react-toastify";

// REQUEST for action requestor, SET for action creator
// select for selector

const AUTH_REQUEST_LOGIN = "AUTH_REQUEST_LOGIN";
const AUTH_SET_USERNAME = "AUTH_SET_USERNAME";
const AUTH_CLEAR_USER = "AUTH_CLEAR_USER";
const AUTH_SET_LOADING = "AUTH_SET_LOADING";
const AUTH_DO_LOGOUT = "AUTH_DO_LOGOUT";

//Action
export const requestLogin = ({ username, password, history }) => ({
  type: AUTH_REQUEST_LOGIN,
  username,
  password,
  history,
});

export const setLoading = (loading) => ({
  type: AUTH_SET_LOADING,
  loading,
});

export const setUsername = (username) => ({
  type: AUTH_SET_USERNAME,
  username,
});

export const clearUser = () => ({
  type: AUTH_CLEAR_USER,
});

export const doLogout = ({ history }) => ({
  type: AUTH_DO_LOGOUT,
  history,
});

// Reducer
const initialState = {
  username: "",
  loading: false,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case AUTH_SET_USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }
    case AUTH_CLEAR_USER: {
      return initialState;
    }
    default:
      return state;
  }
}

export const selectLoading = (state) => state?.auth?.loading || false;

export const selectUsername = (state) => state?.auth?.username;

const _delay = (timeMs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeMs);
  });
};

const handleFetchLogin = function* ({ username, password, history }) {
  const loading = yield select(selectLoading);
  if (loading) return;
  yield put(setLoading(true));
  yield call(_delay, 2000);
  yield put(setUsername(username));
  localStorage.setItem("username", username);
  yield put(setLoading(false));
  history.replace("/");
  // try {
  //   yield put(setLoading(true));
  //   const loginResponse = yield call(getToken, username, password);
  //   console.log("login response", loginResponse);
  // } catch (err) {
  //   const responseData = err?.response?.data;
  //   console.log("Axios login error", responseData);
  //   toast.error(responseData?.["error_code"] || err.toString(), {
  //     position: "top-right",
  //     autoClose: 3500,
  //     closeOnClick: true,
  //   });
  // } finally {
  //   yield put(setLoading(false));
  // }
};

const handleDoLogout = function* ({ history }) {
  yield put(clearUser());
  localStorage.removeItem("username");
  history.replace("/login");
};

export const authSaga = function* watch() {
  yield takeEvery(AUTH_REQUEST_LOGIN, handleFetchLogin);
  yield takeEvery(AUTH_DO_LOGOUT, handleDoLogout);
};

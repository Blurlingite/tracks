import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with email & password
  try {
    const response = await trackerApi.post("/signup", {
      email,
      password,
    });
    // we use AsyncStorage to store the jwt so that a user does not have to keep logging in everytime the close the app
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }

  // if we sign up, modify state  and say that we are authenticated
  // if sign up fails, we probably need to reflect an error message somewhere
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in with email & password
    // Handle success by updating state
    // Handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);

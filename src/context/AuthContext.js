import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with email & password
    // if we sign up, modify state  and say that we are authenticated
    // if sign up fails, we probably need to reflect an error message somewhere
  };
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
  { isSignedIn: false }
);

// used to allow non-react files to use the navigator provided by React Native so they can navigate to somewhere in your application
import { NavigationActions } from "react-navigation";
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

// routeName is the name you assign to the route in your navigator in App.js.
// SO in this line: Signup: SignupScreen   the routeName is "Signup"
export const navigate = (routeName, params) => {
  // dispatch the action to the navigator and pass along the routeName & params you passed in
  // this will allow you to navigate to the screen assigned to that route name
  // By dispatching the action we are telling react native to change it's state and show a different screen
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};

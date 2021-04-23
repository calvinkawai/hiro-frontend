import { navigate } from "gatsby"
import Parse from "parse"

export const signUp = async ({ username, password, email}) => {
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  try {
    await user.signUp();
    alert("User created!");
    navigate(`/`)
  } catch (error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
}

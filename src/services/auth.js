import Parse from "parse"
import { navigate } from "gatsby"

export const isBrowser = typeof window !== "undefined"
const getUser = () => {return Parse.User.current()}

export const handleLogin = async ({ username, password }) => {
  var user = new Parse.User()
  user.set("username", username);
  user.set("password", password);
  try {
    await user.logIn()
      .then(function (response){
        navigate('/private')
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        console.log('do something later')
      });
  } catch (error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return user != null
}

export const getCurrentUser = () => getUser()

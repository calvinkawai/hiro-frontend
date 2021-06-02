import Parse from "parse"
import { navigate } from "gatsby"

const getUser = () => { return Parse.User.current() }

export const isLoggedIn = () => {
  const user = getUser()
  return user != null
}

export const getCurrentUser = () => getUser()

export const handleLogin = async ({ username, password }) => {
  var user = new Parse.User()
  user.set("username", username);
  user.set("password", password);
  try {
    await user.logIn()
      .then(function (response) {
        navigate('/')
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

export const handleLogout = async () => {
  try {
    await Parse.User.logOut()
      .then(function (response) {
        navigate('/')
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        console.log('do something later')
      });
  } catch (error) {
    alert("Error: " + error.code + " " + error.message);
  }
  return false
}

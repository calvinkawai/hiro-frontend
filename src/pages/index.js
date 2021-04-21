import * as React from "react"
import { Link } from "gatsby"
import Parse from "parse"

Parse.initialize(process.env.GATSBY_APPLICATION_ID, process.env.GATSBY_JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";


// markup
const IndexPage = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">HIRO</a>
      <Link to="/register/" type="button" class="btn btn-dark">Register</Link>
    </nav>
  )
}

export default IndexPage

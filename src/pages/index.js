import * as React from "react"
import Register from './register'
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">HIRO</a>
        <Link to="/register" class="btn btn-secondary btn-lg" tabindex="-1" role="button" aria-disabled="true">
          Register
        </Link>
      </nav>
    </div>
  )
}

export default IndexPage

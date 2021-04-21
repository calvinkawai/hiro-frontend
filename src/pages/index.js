import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#home">HIRO</a>
        <button type="button" class="btn btn-dark">Login</button>
      </nav>
      <samp>{process.env.GATSBY_APPLICATION_ID}</samp>
    </div>
  )
}

export default IndexPage

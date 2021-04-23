import * as React from "react"
import NavbarComp from "../components/NavbarComp.js"
import Parse from "parse"

console.log(Parse.User.current())

// markup
const IndexPage = () => {
  return (
    <NavbarComp />
  )
}

export default IndexPage

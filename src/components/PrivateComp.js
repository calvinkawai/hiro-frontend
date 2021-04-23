import * as React from "react"
import { isLoggedIn, getCurrentUser } from "../services/auth"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

class PrivateComp extends React.Component {
  componentDidMount(prevProps) {
    if (!isLoggedIn()) {
      navigate(`/login`)
    }
  }
  render () {
    let title;
    if (isLoggedIn()) {
      title = <h1>Shopping List {getCurrentUser().getUsername()}</h1>
    }
    return (
      <div className="shopping-list">
        {title}
      </div>
    )
  }
}
export default PrivateComp;

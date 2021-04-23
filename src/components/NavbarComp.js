import * as React from "react"
import { Navbar, Form, Button, } from "react-bootstrap";
import { isLoggedIn, getCurrentUser } from "../services/auth"

class NavbarComp extends React.Component {
  render () {
    console.log(isLoggedIn())
    let userOrLogin;
    if (isLoggedIn()) {
      userOrLogin = <Button variant="dark">{getCurrentUser().getUsername()}</Button>
    } else {
      userOrLogin = <Button href="/login" aria-disabled="true" variant="dark">
        Login
      </Button>
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
          <Form inline>
            <Navbar.Brand className="navbar-brand">HIRO</Navbar.Brand>
            <Navbar.Toggle />
          </Form>
          <Form inline>
            {userOrLogin}
          </Form>
        </Navbar>
      </div>
    )
  }
}
export default NavbarComp;

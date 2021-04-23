import * as React from "react"
import { Navbar, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { isLoggedIn, getCurrentUser, handleLogout } from "../services/auth"

class NavbarComp extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick (event) {
    event.preventDefault()
    handleLogout()
  }
  render () {
    let userOrLogin;
    if (isLoggedIn()) {
      userOrLogin = <DropdownButton title={ getCurrentUser().getUsername() } variant="secondary" menuAlign="right">
        <Dropdown.Item onClick={ this.onClick } >Log Out</Dropdown.Item>
      </DropdownButton>
    } else {
      userOrLogin = <Button href="/login" aria-disabled="true" variant="secondary">
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

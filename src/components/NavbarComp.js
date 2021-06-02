import * as React from "react"
import { Navbar, Form, Button, DropdownButton, Dropdown, Container, Row, Col } from "react-bootstrap";
import { isLoggedIn, getCurrentUser, handleLogout } from "../services/auth"
import { navigate } from "gatsby"

class NavbarComp extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick (event) {
    event.preventDefault()
    handleLogout()
  }

  onClickSurvey (event) {
    event.preventDefault()
    navigate(`/survey`)
  }

  render () {
    let userOrLogin;
    if (isLoggedIn()) {
      userOrLogin = <DropdownButton title={ getCurrentUser().getUsername() } variant="dark" menuVariant="dark" menuAlign="right">
        <Dropdown.Item onClick={ this.onClickSurvey }>Survey</Dropdown.Item>
        <Dropdown.Item onClick={ this.onClick }>Log Out</Dropdown.Item>
      </DropdownButton>
    } else {
      userOrLogin = <Button href="/login" aria-disabled="true" variant="dark">
        Login
      </Button>
    }
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
              <Form inline>
                <Navbar.Brand className="navbar-brand">HIRO</Navbar.Brand>
                <Navbar.Toggle />
              </Form>
              <Form inline>
                {userOrLogin}
              </Form>
            </Navbar>
          </Col>
        </Row>
      </Container>
  )
  }
}
export default NavbarComp;

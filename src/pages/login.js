import React from "react"
import { navigate } from "gatsby"
import { Form, Button, Modal } from 'react-bootstrap';
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate(event) {
    this.setState({
      [event.target.getAttribute('id')]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }

    const fieldForms = [{
      'id': 'username',
      'type': 'text'
    }, {
      'id': 'password',
      'type': 'password'
    }]
      .map((field) =>
        <Form.Group>
          <Form.Label htmlFor={field['id']}>{field['id']}</Form.Label>
          <Form.Control
            required
            id={field['id']}
            type={field['type']}
            onChange={this.handleUpdate}
          />
        </Form.Group>
      );

    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
          <Modal.Body>
            {fieldForms}
          </Modal.Body>
          <Modal.Footer>
            <Form.Row>
              <Button type="submit" className={"btn btn-primary"} disabled={((!this.state.username || !this.state.password) ? true : false) ? true : false}>Login</Button>
              <Button href="/register" variant="link">Register</Button>
            </Form.Row>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
    )
  }
}

export default Login

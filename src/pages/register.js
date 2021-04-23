import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { signUp } from '../services/register'

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const name = event.target.getAttribute('id');
    const value = event.target.value;
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    signUp(this.state)
  }

  render() {
    const fieldForms = [{
      'id': 'username',
      'type': 'text'
    }, {
      'id': 'email',
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
          onChange={this.changeHandler}
        />
      </Form.Group>
    );

    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Register Page</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
          <Modal.Body>
            {fieldForms}
          </Modal.Body>
          <Modal.Footer>
            <Form.Row>
              <Button type="submit" className={"btn btn-primary"} disabled={( (!this.state.username || !this.state.password || !this.state.email) ? true : false) ? true : false }>Register</Button>
              <Button href="/login" variant="link">Login</Button>
            </Form.Row>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
    );
  }
}

export default Register;

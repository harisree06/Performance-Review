import React from "react";
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleclick() {
    this.props.click("hello");
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3}>
            Email
          </Col>
          <Col sm={9}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
            Password
          </Col>
          <Col sm={9}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={3} sm={9}>
            <Button onClick={() => this.handleclick()}>Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;

import React, { Component } from "react";
import Nav from "./components/navBar/Navbar";
import Login from "./components/login/login";
import { Grid, Row, Col } from "react-bootstrap";
import C from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokken: null
    };
  }

  onSubmit = data => {
    console.log(data);
  };

  render() {
    let login;
    if (!this.state.tokken) {
      login = (
        <Grid className={C.App}>
          <Row className="show-grid">
            <Col xs={12} md={8} />
            <Col xs={6} md={4}>
              <div className={C.login}>
                <Login click={this.onSubmit} />
              </div>
            </Col>
          </Row>
        </Grid>
      );
    } else {
      login = null;
    }

    return (
      <div>
        <Nav />
        {login}
      </div>
    );
  }
}

export default App;

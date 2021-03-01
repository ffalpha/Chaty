import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
export default class Register extends Component {
  state = {};
  handleChange = () => {};
  render() {
    return (
      <Grid textAlign="center" verticalAlign="center" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="green" textAlign="center">
            <Icon name="puzzle piece" color="red" />
            Register for Chaty
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={this.handleChange}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="email"
              />

              <Form.Input
                fluid
                name="passoword"
                icon="lock"
                iconPosition="left"
                placeholder="PAssowrd"
                onChange={this.handleChange}
                type="passowrd"
              />

              <Form.Input
                fluid
                name="passowordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Passoword Confirmation"
                onChange={this.handleChange}
                type="passowrd"
              />
              <Button color="green" fluid size="large">
                Sign up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user ?<Link to="login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

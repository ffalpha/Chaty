import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/config';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react';
export default class Register extends Component {
  state = {
    username: '',
    email: '',
    passoword: '',
    passowordConfirmation: '',
    errors: [],
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    if (this.isFromvalid()) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.passoword)
        .then((Response) => {
          console.log(Response);
        });
    }
  };

  isFromvalid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: 'Fill in Fileds' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: 'Password is invalid' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isPasswordValid = ({ passoword, passowordConfirmation }) => {
    if (passoword.length < 6 || passowordConfirmation.length < 6) {
      return false;
    } else if (passoword !== passowordConfirmation) {
      return false;
    } else {
      return true;
    }
  };
  isFormEmpty = ({ username, email, passoword, passowordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !passoword.length ||
      !passowordConfirmation.length
    );
  };
  render() {
    const { email, username, password, passwordConfirmation } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="green" textAlign="center">
            <Icon name="puzzle piece" color="red" />
            Register for Chaty
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={this.handleChange}
                value={username}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                type="email"
              />

              <Form.Input
                fluid
                name="passoword"
                icon="lock"
                iconPosition="left"
                placeholder="Passowrd"
                onChange={this.handleChange}
                value={password}
                type="passowrd"
              />

              <Form.Input
                fluid
                name="passowordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Passoword Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
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

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChange } from  '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{

  onEmailChange(text){
    debugger;
    this.props.emailChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordChange(text)
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label ="Email"
            placeholder = "example@asite.com"
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label ="password"
          placeholder = "password"
          onChangeText={this.onPasswordChange.bind(this)}
          value = {this.props.password}
        />
        </CardSection>

        <CardSection>
          <Button>
            LogIn
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email : state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps,{ emailChanged, passwordChange })(LoginForm);

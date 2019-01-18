import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from  '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text)
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label ="Email"
            placeholder = "example@asite.com"
            onChangetext={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label ="password"
          placeholder = "password"
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

export default connect(null,{ emailChanged })(LoginForm);

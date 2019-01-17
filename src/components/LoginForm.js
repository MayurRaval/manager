import React,{ Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label ="Email"
            placeholder = "example@asite.com"
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

export default LoginForm;

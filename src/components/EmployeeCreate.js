import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jan"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection>
          <Picker>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="TuesDay" value="TuesDay" />
            <Picker.Item label="WednesDay" value="WednesDay" />
            <Picker.Item label="ThursDay" value="ThursDay" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="SaturDay" value="SaturDay" />
            <Picker.Item label="SunDay" value="SunDay" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
              Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.epmloyeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

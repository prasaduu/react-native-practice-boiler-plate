import React, {Component} from 'react';
import {
  SignUpFormWrapper,
  SignUpHeadingText,
  SignUpSubHeadingText,
  HorizontalLineSeperator,
} from './styledComponents';
import {InputField} from '../../components/InputField/indes';

export default class SignUpScene extends Component {
  render() {
    return (
      <SignUpFormWrapper>
        <SignUpHeadingText>Sign Up</SignUpHeadingText>
        <SignUpSubHeadingText>
          Please Fill in this form to create an account
        </SignUpSubHeadingText>
        <HorizontalLineSeperator />
        <InputField placeholder={'First Name'} />
        <InputField placeholder={'Last Name'} />
        <InputField placeholder={'Mobile Number'} keyboardType={'numeric'} />
        <InputField placeholder={'Email'} keyboardType={'email-address'} />
        <InputField placeholder={'Password'} secureTextEntry={true} />
        <InputField placeholder={'Confirm Password'} secureTextEntry={true} />
      </SignUpFormWrapper>
    );
  }
}

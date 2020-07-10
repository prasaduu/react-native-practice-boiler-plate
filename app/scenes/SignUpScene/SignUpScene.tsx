import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {} from 'react-color';

import {InputField} from '../../components/InputField/indes';
import {DropDownPicker} from '../../components/DropDownPicker';
import {RadioButtonGroup} from '../../components/RadioButtonGroup';
import {RangeSlider} from '../../components/RangeSlider';
import {ConsentSeeker} from '../../components/ConsentSeeker';
import {DatePicker} from '../../components/DatePicker';

import {
  styles,
  SignUpFormWrapper,
  SignUpHeadingText,
  SignUpSubHeadingText,
  HorizontalLineSeperator,
  LabelAsTitle,
  RowDivision,
  SubmitButton,
  SubmitButtonWrapper,
} from './styledComponents';

export default class SignUpScene extends Component {
  inputFieldsData = [
    {
      placeholder: 'First Name',
      onChangeText: (newValue: string) => this.setState({firstName: newValue}),
    },
    {
      placeholder: 'Last Name',
      onChangeText: (newValue: string) => this.setState({lastName: newValue}),
    },
    {
      placeholder: 'Mobile Number',
      keyboardType: 'numeric',
      onChangeText: (newValue: string) =>
        this.setState({mobileNumber: newValue}),
    },
    {
      placeholder: 'Email',
      keyboardType: 'email-address',
      onChangeText: (newValue: string) => this.setState({email: newValue}),
    },
    {
      placeholder: 'Password',
      secureTextEntry: true,
      onChangeText: (newValue: string) => this.setState({password: newValue}),
    },
    {
      placeholder: 'Confirm Password',
      secureTextEntry: true,
      onChangeText: (newValue: string) =>
        this.setState({confirmPassword: newValue}),
    },
  ];

  radioButtonsData = [{label: 'Male'}, {label: 'Female'}, {label: 'Others'}];

  dropdownPickerData = [
    {label: 'CSE', value: 'cse'},
    {label: 'ECE', value: 'ece'},
    {label: 'Civil', value: 'ce'},
    {label: 'Metallurgy', value: 'mme'},
  ];

  state = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'others',
    branch: 'cse',
    date: new Date(),
    address: '',
    typingSpeed: 27,
    isAccepted: false,
  };

  onGenderValueChange = ({label}: any) => this.setState({gender: label});

  onBranchValueChange = (newBranch: string) =>
    this.setState({branch: newBranch});

  onDateChange = (date: string) => this.setState({date});

  onChangeAddress = (address: string) => this.setState({address});

  onChangeTypingSpeed = (value: number) => this.setState({typingSpeed: value});

  setIsAccepted = () => this.setState({isAccepted: !this.state.isAccepted});

  render() {
    const {
      inputFieldsData,
      radioButtonsData,
      dropdownPickerData,
      onGenderValueChange,
      onBranchValueChange,
      onDateChange,
      onChangeAddress,
      onChangeTypingSpeed,
      setIsAccepted,
    } = this;
    const {date, branch, address, typingSpeed, isAccepted} = this.state;
    return (
      <SignUpFormWrapper>
        <Text />
        <SignUpHeadingText>Sign Up</SignUpHeadingText>
        <SignUpSubHeadingText>
          Please Fill in this form to create an account
        </SignUpSubHeadingText>
        <HorizontalLineSeperator />
        <FlatList
          data={inputFieldsData}
          renderItem={({item}) => <InputField {...item} />}
          keyExtractor={item => item.placeholder}
        />
        <RowDivision>
          <RadioButtonGroup
            label="Select your Gender"
            data={radioButtonsData}
            selectedBtn={onGenderValueChange}
          />

          <View style={[styles.equalColumns]}>
            <DropDownPicker
              label="Select your Branch"
              selectedValue={branch}
              data={dropdownPickerData}
              onValueChange={onBranchValueChange}
            />
            <DatePicker label="Select Your DOB" {...{date, onDateChange}} />
          </View>
        </RowDivision>
        <RowDivision>
          <LabelAsTitle>Enter your address</LabelAsTitle>
          <InputField
            placeholder={'Please Enter your address'}
            value={address}
            onChangeText={onChangeAddress}
            multiline={true}
          />
        </RowDivision>
        <RangeSlider
          label="Set your typing speed"
          value={typingSpeed}
          onValueChange={onChangeTypingSpeed}
        />
        <ConsentSeeker {...{isAccepted, setIsAccepted}} />
        <SubmitButtonWrapper>
          <SubmitButton
            title="Sign Up"
            onPress={() => console.log('SigningUp')}
          />
        </SubmitButtonWrapper>
      </SignUpFormWrapper>
    );
  }
}

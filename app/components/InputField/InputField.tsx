import React, {Component} from 'react';
import {
  InputFieldWrapper,
  InputText,
  InputErrorDisplay,
} from './styledComponents';

interface ErrorProps {
  shouldShowError: boolean;
  errorMessage: string;
}

interface InputFieldProps {
  value: string;
  placeholder: string;
  multiline: boolean;
  secureTextEntry: boolean;
  keyboardType: any | 'default' | 'numeric' | 'email-address';
  onChangeText: (any: string) => void;
  onBlurFn: () => void;
  onValidateFn: (any: string) => ErrorProps;
}

export default class InputField extends Component<InputFieldProps> {
  static defaultProps = {
    multiline: false,
    secureTextEntry: false,
    value: '',
    keyboardType: 'default',
    placeholder: 'Enter Text',
    onBlurFn: () => {
      console.log('blurred');
    },
    onValidateFn: () => {
      console.log('validated');
      return {
        shouldShowError: false,
        errorMessage: 'Required',
      };
    },
  };

  state = {
    textValue: this.props.value,
    error: {
      shouldShowError: false,
      errorMessage: 'Required',
    },
  };

  setTextValue = (text: string) => {
    this.setState({textValue: text});
  };

  onBlur = () => {
    const {
      doValidations,
      props: {onBlurFn},
    } = this;
    onBlurFn();
    doValidations();
  };

  doValidations = () => {
    const {
      props: {onValidateFn, onChangeText},
      state: {textValue},
    } = this;
    this.setState({error: onValidateFn(textValue)});
    onChangeText(textValue);
  };

  render() {
    const {setTextValue: onChangeText, onBlur} = this;
    const {
      textValue: value,
      error: {shouldShowError, errorMessage},
    } = this.state;
    const {placeholder, keyboardType, secureTextEntry, multiline} = this.props;

    return (
      <InputFieldWrapper>
        <InputText
          {...{
            onBlur,
            onChangeText,
            keyboardType,
            secureTextEntry,
            placeholder,
            value,
            multiline,
          }}
        />
        {shouldShowError && (
          <InputErrorDisplay>*{errorMessage}</InputErrorDisplay>
        )}
      </InputFieldWrapper>
    );
  }
}

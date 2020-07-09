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
  placeholder: string;
  secureTextEntry: boolean;
  keyboardType: 'default' | 'numeric' | 'email-address';
  onBlurFn: () => void;
  onValidateFn: (any: string) => ErrorProps;
}

export default class InputField extends Component<InputFieldProps> {
  static defaultProps = {
    secureTextEntry: false,
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
    textValue: '',
    error: {
      shouldShowError: false,
      errorMessage: 'Required',
    },
  };

  onChangeText = (text: string) => {
    this.setState({textValue: text});
    this.doValidations();
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
      props: {onValidateFn},
      state: {textValue},
    } = this;
    this.setState({error: onValidateFn(textValue)});
  };

  render() {
    const {onChangeText, onBlur} = this;
    const {
      textValue: value,
      error: {shouldShowError, errorMessage},
    } = this.state;
    const {placeholder, keyboardType, secureTextEntry} = this.props;

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
          }}
        />
        {shouldShowError && (
          <InputErrorDisplay>*{errorMessage}</InputErrorDisplay>
        )}
      </InputFieldWrapper>
    );
  }
}

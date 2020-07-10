import React, {Component} from 'react';

import RadioButtonRN from 'radio-buttons-react-native';

import {RadioButtonsWrapper, LabelAsTitle} from './styledComponents';

interface RadioButtonGroupProps {
  label: string;
  data: Array<{label: string}>;
  selectedBtn: (any: any) => void;
}

export default class RadioButtonGroup extends Component<RadioButtonGroupProps> {
  render() {
    const {label, data, selectedBtn} = this.props;
    return (
      <RadioButtonsWrapper>
        <LabelAsTitle>{label}</LabelAsTitle>
        <RadioButtonRN duration={100} box={false} {...{data, selectedBtn}} />
      </RadioButtonsWrapper>
    );
  }
}

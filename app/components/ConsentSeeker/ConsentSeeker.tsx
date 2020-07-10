import React, {Component} from 'react';
import {CheckBox} from 'react-native';

import {
  ConsentSeekerWrapper,
  HyperlinkText,
  LabelAsTitle,
} from './styledComponents';

interface ConsentSeekerProps {
  isAccepted: boolean;
  setIsAccepted: () => void;
}
export default class ConsentSeeker extends Component<ConsentSeekerProps> {
  render() {
    const {isAccepted: value, setIsAccepted: onValueChange} = this.props;
    return (
      <ConsentSeekerWrapper>
        <CheckBox {...{value, onValueChange}} />
        <LabelAsTitle>
          I accept the <HyperlinkText>Terms of Use</HyperlinkText> &{' '}
          <HyperlinkText>Privacy Policy</HyperlinkText>
        </LabelAsTitle>
      </ConsentSeekerWrapper>
    );
  }
}

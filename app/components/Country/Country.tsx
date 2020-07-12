import React, {Component} from 'react';
import {Text} from 'react-native';
import {SvgUri} from 'react-native-svg';

import {CountryDetailsWrapper} from './styledComponents';

interface CountryProps {
  countryDetails: any;
}

export default class Country extends Component<CountryProps> {
  render() {
    const {
      countryDetails: {flag, name},
    } = this.props;
    return (
      <CountryDetailsWrapper>
        <SvgUri uri={flag} height="100px" width="100px" />
        <Text>{name}</Text>
      </CountryDetailsWrapper>
    );
  }
}

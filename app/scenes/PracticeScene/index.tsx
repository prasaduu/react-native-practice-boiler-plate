import React, {Component, Fragment} from 'react';
import {Text} from 'react-native';

import ModalExample from '../../components/ModalExample';
import AlertExample from '../../components/AlertExample';

import {PracticeScreenWrapper} from './styledComponents';

class PracticeScene extends Component {
  render() {
    return (
      <Fragment>
        <PracticeScreenWrapper>
          <Text>Hello DP</Text>
          <ModalExample />
          <AlertExample />
        </PracticeScreenWrapper>
      </Fragment>
    );
  }
}

export default PracticeScene;

import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export {LabelAsTitle} from '../../styledComponents';

export const WrapperWithGradientBackGround = styled.ScrollView``;

export const SignUpFormWrapper = styled.ScrollView`
  font-size: 20px;
  background: #f4fcff;
  padding: 10px;
`;
export const SignUpHeadingText = styled.Text`
  font-size: 44px;
  font-weight: 100;
`;
export const SignUpSubHeadingText = styled.Text``;
export const HorizontalLineSeperator = styled.View`
  padding: 0.2px;
  background-color: black;
  margin: 10px 0px;
`;

export const RowDivision = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const SubmitButtonWrapper = styled.View`
  align-items: center;
  color: red;
  font-weight: 900;
`;

export const SubmitButton = styled.Button`
  padding: 8px 16px;
  margin: 5px;
`;

export const styles = StyleSheet.create({
  equalColumns: {
    flex: 1,
    margin: 5,
  },
});

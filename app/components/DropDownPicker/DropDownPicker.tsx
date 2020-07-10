import React, {Component} from 'react';
import {View} from 'react-native';
import {LabelAsTitle, BranchPicker} from './styledComponents';

interface DropDownPickerProps {
  label: string;
  selectedValue: string;
  data: Array<{label: string; value: string}>;
  onValueChange: (any: string) => void;
}

export default class DropDownPicker extends Component<DropDownPickerProps> {
  static defaultProps = {
    label: 'Select any Option',
    value: '',
  };

  render() {
    const {data, selectedValue, label, onValueChange} = this.props;
    return (
      <View>
        <LabelAsTitle>{label}</LabelAsTitle>
        <BranchPicker {...{selectedValue, onValueChange}}>
          {data.map(item => (
            <BranchPicker.Item key={item.value} {...item} />
          ))}
        </BranchPicker>
      </View>
    );
  }
}

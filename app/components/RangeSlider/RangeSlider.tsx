import React, {Component} from 'react';
import {Slider} from 'react-native-elements';
import {RangeSliderWrapper, LabelAsTitle} from './styledComponents';

interface RangeSliderProps {
  label: string;
  value: number;
  onValueChange?: (any: number) => void;
}
export default class RangeSlider extends Component<RangeSliderProps> {
  static defaultProps = {
    label: 'Choose Range',
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  onValueChange = (sliderValue: number) => {
    const value = parseInt(sliderValue.toString(), 10);
    this.setState({value});
    const {onValueChange} = this.props;
    onValueChange && onValueChange(value);
  };

  render() {
    const {
      state: {value},
      props: {label},
      onValueChange,
    } = this;
    return (
      <RangeSliderWrapper>
        <LabelAsTitle>
          {label} :-: {value}
        </LabelAsTitle>
        <Slider
          {...{value, onValueChange}}
          animateTransitions={true}
          thumbTintColor="grey"
          minimumTrackTintColor="orange"
          maximumTrackTintColor="lightgreen"
          minimumValue={0}
          maximumValue={100}
        />
      </RangeSliderWrapper>
    );
  }
}

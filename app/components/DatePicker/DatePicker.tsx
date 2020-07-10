import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {styles, DatePickerWrapper, LabelAsTitle} from './styledComponents';

interface DatePickerComponentProps {
  date: Date | string;
  label: string;
  onDateChange?: (date: string) => void;
}
export default class DatePickerComponent extends Component<
  DatePickerComponentProps
> {
  static defaultProps = {
    date: new Date(),
    label: 'Pick a date',
  };

  state = {
    date: this.props.date,
  };

  onDateChange = (date: string) => {
    this.setState({date});
    const {onDateChange} = this.props;
    onDateChange && onDateChange(date);
  };

  render() {
    const {
      state: {date},
      props: {label},
      onDateChange,
    } = this;
    return (
      <DatePickerWrapper>
        <LabelAsTitle>{label}</LabelAsTitle>
        <DatePicker
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          maxDate={date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={styles}
          onDateChange={onDateChange}
        />
      </DatePickerWrapper>
    );
  }
}

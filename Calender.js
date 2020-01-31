import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Moment from 'moment';
const Calender = () => {
  let [january, setJanuary] = useState([
    {day: '2020-01-01', selected: true},
    {day: '2020-01-02', selected: true},
    {day: '2020-01-03', selected: false},
    {day: '2020-01-04', selected: true},
    {day: '2020-01-05', selected: false},
    {day: '2020-01-06', selected: true},
    {day: '2020-01-07', selected: false},
    {day: '2020-01-08', selected: false},
    {day: '2020-01-09', selected: false},
    {day: '2020-01-10', selected: false},
    {day: '2020-01-11', selected: false},
    {day: '2020-01-12', selected: true},
    {day: '2020-01-13', selected: true},
    {day: '2020-01-14', selected: true},
    {day: '2020-01-15', selected: true},
    {day: '2020-01-16', selected: true},
    {day: '2020-01-17', selected: false},
    {day: '2020-01-18', selected: false},
    {day: '2020-01-19', selected: false},
    {day: '2020-01-20', selected: false},
    {day: '2020-01-21', selected: true},
    {day: '2020-01-22', selected: true},
    {day: '2020-01-23', selected: true},
    {day: '2020-01-24', selected: true},
    {day: '2020-01-25', selected: false},
    {day: '2020-01-26', selected: false},
    {day: '2020-01-27', selected: false},
    {day: '2020-01-28', selected: false},
    {day: '2020-01-29', selected: true},
    {day: '2020-01-30', selected: true},
    {day: '2020-01-31', selected: true},
  ]);
  let newDates = {};
  const setAvailDates = month => {
    for (let i = 0; i < month.length; i++) {
      newDates[month[i].day] = {
        // selected: !month[i].selected,
        disabled: month[i].selected ? true : false,
        disableTouchEvent: month[i].disabled ? true : false,
        // selectedColor: '#0baf00',
      };
    }
  };
  setAvailDates(january);

  const selectDate = day => {
    january.filter(dd =>
      dd.day === day ? console.log({...dd, selected: !dd.selected}) : null,
    );
    // alert(day);
  };
  return (
    <>
      <View>
        {console.log(newDates)}
        <Text>Select Stay</Text>
        <TouchableOpacity onPress={() => alert('One Day')}>
          <Text>One Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Two Day')}>
          <Text>Two Days</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Range Select')}>
          <Text>Select Range</Text>
        </TouchableOpacity>
      </View>
      <Calendar
        minDate={'2020-01-01'}
        onDayPress={
          //   day => console.log(day.dateString)

          day =>
            newDates[day.dateString].disabled
              ? null
              : selectDate(day.dateString)
        }
        onDayLongPress={day => console.log('selected day (long)', day)}
        onMonthChange={month => console.log('month changed', month)}
        hideExtraDays
        markedDates={newDates}
        theme={{
          textSectionTitleColor: 'grey',
          selectedDayBackgroundColor: 'green',
          selectedDayTextColor: 'white',
          textDisabledColor: '#e45844',
          arrowColor: 'green',
          dayTextColor: 'green',
        }}
        style={{width: '90%', alignSelf: 'center', marginTop: 100}}
      />
    </>
  );
};

export default Calender;

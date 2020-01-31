// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Shimmer from './Shimmer';
// import {Calendar, LocaleConfig} from 'react-native-calendars';
// import Moment from 'moment';
// const Calender = () => {
//   const moment = new Moment();

//   const january = [
//     {day: '2020-01-01', selected: true},
//     {day: '2020-01-02', selected: true},
//     {day: '2020-01-03', selected: false},
//     {day: '2020-01-04', selected: true},
//     {day: '2020-01-05', selected: false},
//     {day: '2020-01-06', selected: true},
//     // {day: '2020-01-07', selected: false},
//     // {day: '2020-01-08', selected: false},
//     // {day: '2020-01-09', selected: false},
//     // {day: '2020-01-10', selected: false},
//     // {day: '2020-01-11', selected: false},
//     // {day: '2020-01-12', selected: false},
//     // {day: '2020-01-13', selected: false},
//     // {day: '2020-01-14', selected: false},
//     // {day: '2020-01-15', selected: false},
//     // {day: '2020-01-16', selected: false},
//     // {day: '2020-01-17', selected: false},
//     // {day: '2020-01-18', selected: false},
//     // {day: '2020-01-19', selected: false},
//     // {day: '2020-01-20', selected: false},
//     // {day: '2020-01-21', selected: false},
//     // {day: '2020-01-22', selected: false},
//     // {day: '2020-01-23', selected: false},
//     // {day: '2020-01-24', selected: false},
//     // {day: '2020-01-25', selected: false},
//     // {day: '2020-01-26', selected: false},
//     // {day: '2020-01-27', selected: false},
//     // {day: '2020-01-28', selected: false},
//     // {day: '2020-01-29', selected: false},
//     // {day: '2020-01-30', selected: false},
//     // {day: '2020-01-31', selected: false},
//   ];
//   let newDates = {};
//   let tempArr = {};
//   const setAvailDates = month => {
//     for (let i = 0; i < month.length; i++) {
//       newDates[month[i].day] = {selected: month[i].selected};
//     }
//     // console.log(newDates);
//     // console.log(newDates);
//   };

//   setAvailDates(january);

//   //   const ddd = '';
//   //   console.log(newDates[`${ddd}`]);
//   const selectDate = day => {
//     // console.log(day);
//     january.filter(dd => {
//       dd.day === day ? console.log(dd.selected) : null;
//     });
//     //   dd.day === day ? console.log('Selected', dd.selected) : console.log(dd.day),
//   };

//   return (
//     <View style={{alignItems: 'center', margin: 30}}>
//       {console.log('Start')}
//       <View>
//         <Text style={{fontSize: 32}}>
//           Calendar
//           {/* {console.log(moment.format('YYYY-MM-D'))} */}
//         </Text>
//       </View>
//       <View style={{width: '100%'}}>
//         <Calendar
//           onDayPress={day => selectDate(day.dateString)}
//           onDayLongPress={day => console.log('selected day (long)', day)}
//           onMonthChange={month => console.log('month changed', month)}
//           hideExtraDays
//           //   markedDates={january.map(day => daysArr)}

//           markedDates={newDates}
//           //   markedDates={{'2020-01-01': {selected: true}}}
//           // markedDates={{...avail, ...unAvail}}
//           //   markedDates={{
//           //     '2020-01-22': {startingDay: true, color: 'crimson'},
//           //     '2020-01-23': {
//           //       selected: true,
//           //       color: 'pink',
//           //       textColor: 'white',
//           //     },
//           //     '2020-01-24': {
//           //       selected: true,
//           //       color: 'pink',
//           //       textColor: 'white',
//           //     },

//           //     '2020-01-25': {
//           //       endingDay: true,
//           //       color: 'crimson',
//           //       textColor: 'white',
//           //     },
//           //   }}
//           //   markingType={'period'}
//           // current={'2012-03-05'}
//           // minDate={'2012-03-06'}
//           // maxDate={'2012-03-09'}
//           // monthFormat={'MM yyyy'}
//           // hideArrows
//           // disableArrowLeft={true}
//           // disableArrowRight={true}
//           // firstDay={1}

//           // showWeekNumbers
//           // hideDayNames
//           // disableMonthChange
//           // renderArrow={direction =>
//           //   direction === 'left' ? <Text>Left</Text> : <Text>Right</Text>
//           // }
//         />
//       </View>
//     </View>
//   );
// };

// export default Calender;
// const styles = StyleSheet.create({});



// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import Moment from 'moment';
// const Calender = () => {
//   let [january, setJanuary] = useState([
//     {day: '2020-01-01', selected: true},
//     {day: '2020-01-02', selected: true},
//     {day: '2020-01-03', selected: false},
//     {day: '2020-01-04', selected: true},
//     {day: '2020-01-05', selected: false},
//     {day: '2020-01-06', selected: true},
//     {day: '2020-01-07', selected: false},
//     {day: '2020-01-08', selected: false},
//     {day: '2020-01-09', selected: false},
//     {day: '2020-01-10', selected: false},
//     {day: '2020-01-11', selected: false},
//     {day: '2020-01-12', selected: true},
//     {day: '2020-01-13', selected: true},
//     {day: '2020-01-14', selected: true},
//     {day: '2020-01-15', selected: true},
//     {day: '2020-01-16', selected: true},
//     {day: '2020-01-17', selected: false},
//     {day: '2020-01-18', selected: false},
//     {day: '2020-01-19', selected: false},
//     {day: '2020-01-20', selected: false},
//     {day: '2020-01-21', selected: true},
//     {day: '2020-01-22', selected: true},
//     {day: '2020-01-23', selected: true},
//     {day: '2020-01-24', selected: true},
//     {day: '2020-01-25', selected: false},
//     {day: '2020-01-26', selected: false},
//     {day: '2020-01-27', selected: false},
//     {day: '2020-01-28', selected: false},
//     {day: '2020-01-29', selected: true},
//     {day: '2020-01-30', selected: true},
//     {day: '2020-01-31', selected: true},
//   ]);
//   let newDates = {};
//   const setAvailDates = month => {
//     for (let i = 0; i < month.length; i++) {
//       newDates[month[i].day] = {
//         // selected: !month[i].selected,
//         disabled: month[i].selected ? true : false,
//         disableTouchEvent: month[i].disabled ? true : false,
//         // selectedColor: '#0baf00',
//       };
//     }
//   };
//   setAvailDates(january);

//   const selectDate = day => {
//     january.filter(dd =>
//       dd.day === day ? console.log({...dd, selected: !dd.selected}) : null,
//     );
//     // alert(day);
//   };
//   return (
//     <>
//       <View>
//         {console.log(newDates)}
//         <Text>Select Stay</Text>
//         <TouchableOpacity onPress={() => alert('One Day')}>
//           <Text>One Day</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('Two Day')}>
//           <Text>Two Days</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('Range Select')}>
//           <Text>Select Range</Text>
//         </TouchableOpacity>
//       </View>
//       <Calendar
//         minDate={'2020-01-01'}
//         onDayPress={
//           //   day => console.log(day.dateString)

//           day =>
//             newDates[day.dateString].disabled
//               ? null
//               : selectDate(day.dateString)
//         }
//         onDayLongPress={day => console.log('selected day (long)', day)}
//         onMonthChange={month => console.log('month changed', month)}
//         hideExtraDays
//         markedDates={newDates}
//         theme={{
//           textSectionTitleColor: 'grey',
//           selectedDayBackgroundColor: 'green',
//           selectedDayTextColor: 'white',
//           textDisabledColor: '#e45844',
//           arrowColor: 'green',
//           dayTextColor: 'green',
//         }}
//         style={{width: '90%', alignSelf: 'center', marginTop: 100}}
//       />
//     </>
//   );
// };

// export default Calender;

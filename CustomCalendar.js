import * as React from 'react';
import * as RN from 'react-native';

class MyCalendar extends React.Component {
  _onPress = item => {
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activeDate.setDate(item);
        return this.state;
      }
    });
  };
  changeMonth = n => {
    this.setState(() => {
      this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);
      return this.state;
    });
  };
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  state = {
    activeDate: new Date(),
  };
  generateMatrix() {
    let matrix = [];
    // Create header
    matrix[0] = this.weekDays;
    let year = this.state.activeDate.getFullYear();
    let month = this.state.activeDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let maxDays = this.nDays[month];
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  }
  render() {
    let matrix = this.generateMatrix();
    let rows = [];
    rows = matrix.map((row, rowIndex) => {
      let rowItems = row.map((item, colIndex) => {
        return (
          <RN.Text
            key={Math.random()}
            style={{
              flex: 1,
              height: 18,
              textAlign: 'center',
              // Highlight header
              backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
              // Highlight Sundays
              color: colIndex == 0 ? '#a00' : '#000',
              // Highlight current date
              fontWeight:
                item == this.state.activeDate.getDate() ? '700' : '100',
            }}
            onPress={() => this._onPress(item)}>
            {item != -1 ? item : ''}
          </RN.Text>
        );
      });
      return (
        <RN.View
          key={Math.random()}
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </RN.View>
      );
    });
    return (
      <RN.View>
        <RN.Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          {this.months[this.state.activeDate.getMonth()]} &nbsp;
          {this.state.activeDate.getFullYear()}
        </RN.Text>
        {rows}
        <RN.Button title="Previous" onPress={() => this.changeMonth(-1)} />
        <RN.Button title="Next" onPress={() => this.changeMonth(+1)} />
      </RN.View>
    );
  }
}
export default MyCalendar;

// import React from 'react';
// import {View, Text} from 'react-native';
// import {Grid, Row, Col} from 'react-native-easy-grid';
// const CustomCalendar = () => {
//   let matrix = [];
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let activeDate = new Date();
//   const year = activeDate.getFullYear();
//   const month = activeDate.getMonth();
//   const firstDay = new Date(year, month, 1).getDate();
//   let maxDays = nDays[month];
//   if (month === 1) {
//     //   Feb
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       maxDays += 1;
//     }
//   }
//   const generateMatrix = () => {
//     let counter = 1;
//     matrix[0] = weekDays;
//     for (let row = 1; row < 7; row++) {
//       matrix[row] = [];
//       for (let col = 0; col < 7; col++) {
//         matrix[row][col] = -1;
//         if (row === 1 && col >= firstDay) {
//           matrix[row][col] = counter++;
//         } else if (row > 1 && counter <= maxDays) {
//           matrix[row][col] = counter++;
//         }
//       }
//     }
//   };
//   generateMatrix();
//   let rows = [];
//   rows = matrix.map((row, rowIndex) => {
//     let rowItems = row.map((item, colIndex) => {
//       return (
//         <Text
//           key={Math.random()}
//           style={{
//             flex: 1,
//             height: 18,
//             textAlign: 'center',
//             // Highlight header
//             backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
//             // Highlight Sundays
//             color: colIndex == 0 ? '#a00' : '#000',
//             // Highlight current date
//             fontWeight: item == activeDate.getDate() ? 'bold' : '100',
//           }}
//           onPress={() => alert(item)}>
//           {item != -1 ? item : ''}
//         </Text>
//       );
//     });
//     return (
//       <View
//         key={Math.random()}
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           padding: 15,
//           justifyContent: 'space-around',
//           alignItems: 'center',
//         }}>
//         {rowItems}
//       </View>
//     );
//   });

//   return (
//     <View>
//       {console.log(rows)}
//       <Text
//         style={{
//           fontSize: 24,
//           textAlign: 'center',
//           fontFamily: 'Roboto',
//         }}>
//         {months[month]} &nbsp;
//         {/* {months[activeDate.getMonth()]} &nbsp; */}
//         {activeDate.getFullYear()}
//       </Text>
//       {rows}
//     </View>
//   );
// };

// export default CustomCalendar;
// {
//   /* <Grid>
//       <Row>
//         <Col>
//           <Text>Mon</Text>
//         </Col>
//         <Col>
//           <Text>Tue</Text>
//         </Col>
//         <Col>
//           <Text>Wed</Text>
//         </Col>
//         <Col>
//           <Text>Thu</Text>
//         </Col>
//         <Col>
//           <Text>Fri</Text>
//         </Col>
//         <Col>
//           <Text>Sat</Text>
//         </Col>
//         <Col>
//           <Text>Sun</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Text>1</Text>
//         </Col>
//         <Col>
//           <Text>2</Text>
//         </Col>
//         <Col>
//           <Text>3</Text>
//         </Col>
//         <Col>
//           <Text>4</Text>
//         </Col>
//         <Col>
//           <Text>5</Text>
//         </Col>
//         <Col>
//           <Text>6</Text>
//         </Col>
//         <Col>
//           <Text>7</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Text>8</Text>
//         </Col>
//         <Col>
//           <Text>8</Text>
//         </Col>
//         <Col>
//           <Text>10</Text>
//         </Col>
//         <Col>
//           <Text>11</Text>
//         </Col>
//         <Col>
//           <Text>12</Text>
//         </Col>
//         <Col>
//           <Text>13</Text>
//         </Col>
//         <Col>
//           <Text>14</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Text>15</Text>
//         </Col>
//         <Col>
//           <Text>16</Text>
//         </Col>
//         <Col>
//           <Text>17</Text>
//         </Col>
//         <Col>
//           <Text>18</Text>
//         </Col>
//         <Col>
//           <Text>19</Text>
//         </Col>
//         <Col>
//           <Text>20</Text>
//         </Col>
//         <Col>
//           <Text>21</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Text>22</Text>
//         </Col>
//         <Col>
//           <Text>23</Text>
//         </Col>
//         <Col>
//           <Text>24</Text>
//         </Col>
//         <Col>
//           <Text>25</Text>
//         </Col>
//         <Col>
//           <Text>26</Text>
//         </Col>
//         <Col>
//           <Text>27</Text>
//         </Col>
//         <Col>
//           <Text>28</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Text>29</Text>
//         </Col>
//         <Col>
//           <Text>30</Text>
//         </Col>
//         <Col>
//           <Text>31</Text>
//         </Col>
//         <Col>
//           <Text></Text>
//         </Col>
//         <Col>
//           <Text></Text>
//         </Col>
//         <Col>
//           <Text></Text>
//         </Col>
//         <Col>
//           <Text></Text>
//         </Col>
//       </Row>
//     </Grid> */
// }

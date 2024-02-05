import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CalendarItem from './commons/CalendarItem';
import DayInfo from './commons/DayInfo';

const Calendar = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#0057b8', '#fff', '#ffd600']}
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}>
        <CalendarItem />
        <DayInfo />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default Calendar;

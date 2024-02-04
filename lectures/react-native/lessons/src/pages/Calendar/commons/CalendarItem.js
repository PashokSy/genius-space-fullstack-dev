import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const CalendarItem = () => {
  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>4 лютого</Text>
      <View style={styles.calendar}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    display: 'flex',
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
  },
  calendar: {
    height: 300,
    backgroundColor: 'white',
  },
});

export default CalendarItem;

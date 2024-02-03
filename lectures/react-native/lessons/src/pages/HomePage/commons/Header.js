import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import VidCalendar from './VidCalendar';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>
          Загальні бойові втрати російського окупанта
        </Text>
        <View style={styles.blockCalendar}>
          <Text style={styles.day}>700-й день війни</Text>
          <VidCalendar />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  titleBig: {
    fontSize: 22,
    color: 'black',
    fontWeight: '800',
  },
  blockCalendar: {
    display: 'flex',
  },
  day: {
    fontSize: 18,
    color: '#ffd600',
    fontWeight: '600',
  },
  data: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default Header;

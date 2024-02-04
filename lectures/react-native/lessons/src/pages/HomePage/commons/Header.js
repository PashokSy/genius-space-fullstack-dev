import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>
          Загальні бойові втрати російського окупанта
        </Text>
        <View style={styles.blockData}>
          <Text style={styles.day}>700-й день війни</Text>
          <Text style={styles.date}>Станом на: 2 лютого</Text>
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
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    margin: 10,
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

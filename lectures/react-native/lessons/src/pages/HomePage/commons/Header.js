import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  // const monthNames = [
  //   'Січень',
  //   'Лютий',
  //   'Березень',
  //   'Квітень',
  //   'Травень',
  //   'Червень',
  //   'Липень',
  //   'Серпень',
  //   'Вересень',
  //   'Жовтень',
  //   'Листопад',
  //   'Грудень',
  // ];
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>
          Загальні бойові втрати російського окупанта
        </Text>
        <View style={styles.blockData}>
          <Text style={styles.day}>/700/-й день війни</Text>
          <Text style={styles.date}>
            Станом на: {now.toLocaleDateString('uk-UA', options)}
          </Text>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    margin: 10,
  },
  day: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  date: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default Header;

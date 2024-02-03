import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

const VidCalendar = () => {
  return (
    <View style={styles.block}>
      <Pressable>
        <Image
          style={styles.btn}
          source={require('../../../img/prev-arrow-svgrepo-com.png')}
        />
      </Pressable>
      <Text style={styles.date}>Станом на: 2 лютого</Text>
      {/* <Text style={styles.date}></Text> */}
      <Pressable>
        <Image
          style={styles.btn}
          source={require('../../../img/next-arrow-svgrepo-com.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    margin: 10,
  },
  date: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  btn: {
    width: 30,
    height: 30,
  },
});

export default VidCalendar;

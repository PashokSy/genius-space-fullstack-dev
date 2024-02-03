import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';

const StatusItem = ({statsAll, statsDay, terms}) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        style={styles.statsImage}
        width={100}
        height={50}
        uri={terms.icon}
      />
      <View>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>(+{statsDay})</Text>
        </View>
        <Text style={styles.statsText}>{terms.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  statsImage: {
    height: 55,
    width: 50,
    marginRight: 15,
    marginLeft: 5,
    borderBottomWidth: 1,
  },
  statsAll: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  statsDay: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: '500',
  },
  statsText: {
    fontSize: 18,
    color: 'black',
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatusItem;

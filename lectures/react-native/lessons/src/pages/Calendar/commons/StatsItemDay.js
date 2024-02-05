import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';

const StatsItemDay = ({statsAll, statsDay, terms}) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        style={styles.statsImage}
        width={100}
        height={50}
        uri={terms.icon}
      />
      <View style={styles.statsInfo}>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    width: 200,
    height: 120,
    flex: 1,
  },
  statsImage: {
    marginRight: 40,
    marginLeft: 35,
    borderBottomWidth: 1,
  },
  statsAll: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
  },
  statsInfo: {
    flex: 1,
  },
  statsDay: {
    fontSize: 13,
    color: 'black',
    marginLeft: 10,
    fontWeight: '500',
  },
  statsText: {
    fontSize: 12,
    color: 'black',
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItemDay;

import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import CalendarItem from './commons/CalendarItem';
import DayInfo from './commons/DayInfo';
import {addStatsDate} from '../../redux/statsDateSlice';
import {fetchStatsDate} from '../../api/stats';
import ModalLoader from '../../commons/loader/ModalLoader';

const Calendar = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const {date} = useSelector(state => state.date);

  useEffect(() => {
    async function fetchData() {
      dispatch(
        addStatsDate(
          await fetchStatsDate(date ?? new Date().toISOString().split('T')[0]),
        ),
      );
    }
    fetchData();
  });

  return (
    <ScrollView>
      <ModalLoader visible={modal} />
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

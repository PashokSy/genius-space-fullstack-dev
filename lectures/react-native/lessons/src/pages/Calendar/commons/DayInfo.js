import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import StatsItemDay from './StatsItemDay';

const terms = {
  message: 'The data were fetched successfully.',
  data: {
    personnel_units: {
      title: 'Personnel units',
      icon: 'https://russianwarship.rip/images/icons/icon-people.svg',
    },
    tanks: {
      title: 'Tanks',
      icon: 'https://russianwarship.rip/images/icons/icon-tank.svg',
    },
    armoured_fighting_vehicles: {
      title: 'Armoured fighting vehicles',
      icon: 'https://russianwarship.rip/images/icons/icon-bbm.svg',
    },
    artillery_systems: {
      title: 'Artillery systems',
      icon: 'https://russianwarship.rip/images/icons/icon-art.svg',
    },
    mlrs: {
      title: 'Multiple Launch Rocket System',
      icon: 'https://russianwarship.rip/images/icons/icon-rszv.svg',
    },
    aa_warfare_systems: {
      title: 'Anti-aircraft warfare systems',
      icon: 'https://russianwarship.rip/images/icons/icon-ppo.svg',
    },
    planes: {
      title: 'Planes',
      icon: 'https://russianwarship.rip/images/icons/icon-plane.svg',
    },
    helicopters: {
      title: 'Helicopters',
      icon: 'https://russianwarship.rip/images/icons/icon-helicopter.svg',
    },
    vehicles_fuel_tanks: {
      title: 'Vehicles and fuel tanks',
      icon: 'https://russianwarship.rip/images/icons/icon-auto.svg',
    },
    warships_cutters: {
      title: 'Warships and cutters',
      icon: 'https://russianwarship.rip/images/icons/icon-ship.svg',
    },
    cruise_missiles: {
      title: 'Cruise missiles',
      icon: 'https://russianwarship.rip/images/icons/icon-rocket.svg',
    },
    uav_systems: {
      title: 'Unmanned aerial vehicle systems',
      icon: 'https://russianwarship.rip/images/icons/icon-bpla.svg',
    },
    special_military_equip: {
      title: 'Special military equipment',
      icon: 'https://russianwarship.rip/images/icons/icon-special.svg',
    },
    atgm_srbm_systems: {
      title:
        'Anti-tank guided missile and short-range ballistic missile systems',
      icon: 'https://russianwarship.rip/images/icons/icon-trk.svg',
    },
    submarines: {
      title: 'Submarines',
      icon: 'https://russianwarship.rip/images/icons/icon-submarine.svg',
    },
  },
};

const DayInfo = () => {
  const stats = useSelector(state => state.stats);

  stats = JSON.parse(stats[0]);

  return (
    <View style={styles.dayInfoBlock}>
      <StatsItemDay
        statsAll={stats.data.records[0].stats.personnel_units}
        statsDay={stats.data.records[0].increase.personnel_units}
        terms={terms.data.personnel_units}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.tanks}
        statsDay={stats.data.records[0].increase.tanks}
        terms={terms.data.tanks}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.armoured_fighting_vehicles}
        statsDay={stats.data.records[0].increase.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.artillery_systems}
        statsDay={stats.data.records[0].increase.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.mlrs}
        statsDay={stats.data.records[0].increase.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.aa_warfare_systems}
        statsDay={stats.data.records[0].increase.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.planes}
        statsDay={stats.data.records[0].increase.planes}
        terms={terms.data.planes}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.helicopters}
        statsDay={stats.data.records[0].increase.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.vehicles_fuel_tanks}
        statsDay={stats.data.records[0].increase.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.warships_cutters}
        statsDay={stats.data.records[0].increase.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.cruise_missiles}
        statsDay={stats.data.records[0].increase.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.uav_systems}
        statsDay={stats.data.records[0].increase.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.special_military_equip}
        statsDay={stats.data.records[0].increase.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.atgm_srbm_systems}
        statsDay={stats.data.records[0].increase.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      />
      <StatsItemDay
        statsAll={stats.data.records[0].stats.submarines}
        statsDay={stats.data.records[0].increase.submarines}
        terms={terms.data.submarines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayInfoBlock: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default DayInfo;

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Linking} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLink,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const onPressGenius = () => {
    Linking.openURL(`https://genius.space/`);
  };

  const onPressGithub = () => {
    Linking.openURL(
      `https://github.com/PashokSy/gs-fullstack-lectures/tree/main/lectures/react-native/lessons`,
    );
  };

  const onPressSavelife = () => {
    Linking.openURL(`https://savelife.in.ua/`);
  };

  return (
    <SafeAreaView style={styles.footer}>
      <Text style={styles.footerTitle}>Бажаєш збільшити статистику?</Text>
      <View style={styles.donate}>
        <FontAwesomeIcon icon={faArrowLeft} color={'black'} size={20} />
        <View style={styles.donateItem}>
          <FontAwesomeIcon icon={faLink} color={'black'} size={20} />
          <Text style={styles.donateName} onPress={onPressSavelife}>
            Повернись живим
          </Text>
        </View>
        <FontAwesomeIcon icon={faArrowRight} color={'black'} size={20} />
      </View>
      <View style={styles.contacts}>
        <Text style={styles.footerName} onPress={onPressGenius}>
          Genius Space
        </Text>
        <Text onPress={onPressGithub}>
          <FontAwesomeIcon icon={faGithub} color={'black'} size={20} />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
  },
  footerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
  },
  donate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donateItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donateName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    padding: 10,
  },
});

export default Footer;

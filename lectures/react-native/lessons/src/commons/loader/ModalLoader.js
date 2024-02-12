import React from 'react';
import {Modal, StyleSheet, View, ActivityIndicator} from 'react-native';

const ModalLoader = ({visible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(34,34,34, 0.5)',
  },
});

export default ModalLoader;

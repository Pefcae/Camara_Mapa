import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

import { styles } from './styles';

const CustomModal = ({ isModalVisible,  onHandleCancel, onHandleConfir }) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Confirmación de Compra</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>¿Finalizar pedido?</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color="#626893" onPress={onHandleCancel} />
          <Button title="Confirmar" color="green" onPress={onHandleConfir} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Modal from 'react-native-modal';
import ChatWidget from '@papercups-io/chat-widget-native';

export default function App() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Button title='Open chat!' onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <ChatWidget
            token='eb504736-0f20-4978-98ff-1a82ae60b266'
            accountId='eb504736-0f20-4978-98ff-1a82ae60b266'
            inbox='3b944206-9411-4eaa-afc8-e6895a38242f'
            title='Welcome to Papercups!'
            subtitle="We'll reply as soon as we can 😊"
            greeting='Hi there! :wave: Have any questions?'
            baseUrl='https://alex-papercups-staging.herokuapp.com'
            showAgentAvailability
            customer={{
              name: 'Test User',
              email: 'test@test.com',
              external_id: '999',
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

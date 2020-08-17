# @papercups-io/chat-widget-native

> Papercups chat widget for React Native

[![NPM](https://img.shields.io/npm/v/@papercups-io/chat-widget-native.svg)](https://www.npmjs.com/package/@papercups-io/chat-widget-native) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

<img width="383" alt="Screen Shot 2020-08-16 at 8 57 25 PM" src="https://user-images.githubusercontent.com/5264279/90348303-6c04d080-e003-11ea-8976-6f9d355ca4c8.png">

## Install

```bash
npm install --save @papercups-io/chat-widget-native
```

## Usage

First, sign up at https://app.papercups.io/register to get your account token. Your account token is what you will use to pass in as the `accountId` prop below.

You can render the chat widget however you like. Here's how you might do it in a modal:

```tsx
import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Modal from 'react-native-modal';
import ChatWidget from '@papercups-io/chat-widget-native';

export default function App() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Button title="Open chat" onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <ChatWidget
            accountId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
            title="Welcome to Papercups!"
            subtitle="We'll reply as soon as we can 😊"
            greeting="Hi there! :wave: Have any questions?"
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

```

## License

MIT © Papercups

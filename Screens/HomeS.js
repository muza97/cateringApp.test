import React from 'react';
import { View, Text } from 'react-native';

function HomeS() {  // Make sure this name is used when importing in App.js
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeS;

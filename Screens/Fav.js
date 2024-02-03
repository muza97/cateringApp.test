import React from 'react';
import { View, Text } from 'react-native';

function Fav() {  // This name should match the export
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

export default Fav; // Matches the function name

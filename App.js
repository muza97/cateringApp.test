import React from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design'; // Ensure this is installed


var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component {
  state = {
    screenText: 'Press a button!',
  };
  
  changeText = (text) => {
    console.log(text + ' has been pressed');
    this.setState({
      screenText: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'white' }}>{this.state.screenText}</Text>
        <StatusBar style="light" />
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable 
              onPress={() => this.changeText('Favourites')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Dynamic style change for press effect
              ]}
            >
              <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} color='#448aff'/>
            </Pressable>
            
           
            <Pressable 
              onPress={() => this.changeText('Catering')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Applied dynamic style change here as well
              ]}
            >
              <Icon name="burn-button" height={iconHeight} width={iconWidth} color='#2962ff'/>
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('Cake')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Applied dynamic style change here as well
              ]}
            >
              <Icon name="birthday-cake" height={iconHeight} width={iconWidth} color='#2962ff'/>
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('User')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Applied dynamic style change here as well
              ]}
            >
              <Icon name="user-shape" height={iconHeight} width={iconWidth} color='#1565e5'/>
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('Settings')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Applied dynamic style change here as well
              ]}
            >
              <Icon name="settings-cogwheel-button" height={iconHeight} width={iconWidth} color='#2962ff'/>
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('Chat')} 
              style={({ pressed }) => [
                styles.IconBehave,
                { backgroundColor: pressed ? '#ddd' : 'transparent' }, // Applied dynamic style change here as well
              ]}
            >
              <Icon name="chat-bubble" height={iconHeight} width={iconWidth} color='#448aff'/>
            </Pressable>


          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3963FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer: {
    position: 'absolute',
    bottom: 20,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '95%',
    justifyContent: 'space-evenly',
    borderRadius: 50,
    padding: 10, // Add padding to make the NavBar taller
  },
  IconBehave: {
    padding: 14,
    // Example: Adding a background color to make Pressable visible
    backgroundColor: '#ffffff',
  },
});

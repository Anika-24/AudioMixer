import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      console.log();
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'orange',justifyContent:'center', 
    alignItems:'center', paddingBottom:80, paddingTop:20}}>
        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'purple',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
              this.playSound(url);
            }}>
            <Text> Sound 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
               width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'blue',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3';
              this.playSound(url);
            }}>
            <Text> Sound 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'yellow',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3';
              this.playSound(url);
            }} >
            <Text> Sound 3</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
               width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'green',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3';
              this.playSound(url);
            }}>
            <Text> Sound 4</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            marginTop:40
          }}
          onPress={() => {
             Audio.setIsEnabledAsync(true);
          }}>
          <Text> Stop Sound </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

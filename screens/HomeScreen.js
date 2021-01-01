import React from 'react';
import { Button, View, Text } from 'react-native';
import Global from '../styles/Global';

// Construction des menus
const HomeScreen = ({ navigation })  => {
    return (
      <View style={Global.container, { flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
        <Button
          style={Global.buttonContainer}
          title="Go to Students"
          onPress={() => navigation.navigate('Students')}
        />
        
        <Button
          style={Global.buttonContainer}
          title="Go to Lessons"
          onPress={() => navigation.navigate('Lessons')}
        />
      </View>
    );
}

export default HomeScreen;
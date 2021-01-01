import React from 'react';
import { Button, View, Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Global from '../styles/Global';

const LessonsScreen = ({ navigation }) =>{
  const { lessons } = useSelector(state => state);
  
  return (
    <View style={Global.container}>
      <Button
        style={Global.buttonText}
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <SafeAreaView>
        <FlatList data={lessons} renderItem={({item, index}) => (
          <View style={Global.item}>
            <Text>{item.title}</Text>
          </View>
        )} keyExtractor={(item, index) => item.id.toString()} />
      </SafeAreaView>
    </View>
  );
}

export default LessonsScreen;
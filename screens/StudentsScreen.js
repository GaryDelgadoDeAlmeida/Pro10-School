import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Global from '../styles/Global';
import { reset_abscence, order_students, get_student } from '../actions/school-actions-types';

const StudentsScreen = ({ navigation }) =>{
  const { students } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View style={Global.containerStudent}>
      <View style={Global.buttonContainer}>
        <Button
          style={Global.buttonText}
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />

        <Button
          style={Global.buttonText}
          title="Reset abscence"
          onPress={() => dispatch(reset_abscence())}
        />

        <Button
          style={Global.buttonText}
          title="Ordre notes"
          onPress={() => dispatch(order_students())}
        />
      </View>
      
      <SafeAreaView>
        <FlatList data={ students } renderItem={({item, index}) => {
          const moyen = item.notes.reduce((accumulator, currentValue) => accumulator + currentValue) / item.notes.length;

          return (
            <TouchableOpacity onPress={() => {
              dispatch(get_student(item));
              navigation.navigate('Abscences');
            }}>
              <View style={Global.item}>
                <Image style={Global.logo} source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <Text style={Global.title}>{item.name}</Text>
                <Text>Nombre d'abscence(s) : {item.attendance}</Text>
                <Text>Nombre de cours : {item.lessons.length}</Text>
                <Text>Moyenne : {moyen.toString()}</Text>
              </View>
            </TouchableOpacity>
          )
        }} keyExtractor={(item, index) => item.id.toString()} />
      </SafeAreaView>
    </View>
  );
}

export default StudentsScreen;
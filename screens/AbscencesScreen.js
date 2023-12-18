import * as React from 'react';
import { View, Button, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { increment_minus, increment_plus } from "../actions/school-actions-types";

const AbscencesScreen = ({navigation, route}) => {
    const { student, behaviours } = useSelector(state => state);
    const behaviour = behaviours.find((oneBehaviour) => oneBehaviour.id == student.id);
    const dispatch = useDispatch();

    console.log(behaviour);
    
    return (
        <View>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Students" onPress={() => navigation.navigate('Students')} />
            <Button title="Incrémenté (+1)" onPress={() => dispatch(increment_plus(student))} />
            <Button title="Décrémenté (-1)" onPress={() => dispatch(increment_minus(student))} />

            <Text>Abscence de : {student.name} &minus; Nombre d'abscences : {student.attendance} &minus; Mention : {behaviour != undefined ? behaviour.mention : "A"}</Text>
        </View>
    );
}

export default AbscencesScreen;
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StudentsScreen from './screens/StudentsScreen';
import LessonsScreen from './screens/LessonsScreen';
import AbscencesScreen from './screens/AbscencesScreen';
import reducer from './reducers/school';

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();
const store = createStore(reducer);

// Définition de la navigation pour votre application 
// Notez que initialRouteName définit la page par défaut 
// quand l'application se charge

// Vous devez définir un wraper NavigationContainer puis 
// utilisez les composants Stack.Navigator et Stack.Screen
// pour définir les éléments de navigation
const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Students" component={StudentsScreen} />
                <Stack.Screen name="Lessons" component={LessonsScreen} />
                <Stack.Screen name="Abscences" component={AbscencesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const App = () => (
    <Provider store={store}>
        <Nav />
    </Provider>
);

export default App;
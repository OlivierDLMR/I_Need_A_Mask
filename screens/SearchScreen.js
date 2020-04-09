import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {View, Text, Button} from 'react-native';
import PharmacieListScreen from './PharmacieListScreen';
import PharmacieScreen from './PharmacieScreen';



const Stack = createStackNavigator();

class Search extends Component {
    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150}}>

                <Stack.Navigator>
                    <Stack.Screen name='Rechercher' component={PharmacieListScreen}/>
                    <Stack.Screen name='PharmacieScreen' options={{title:'Pharmacie'}} component={PharmacieScreen}/>
                </Stack.Navigator>


            </View>

        );
    }
}


export default Search;
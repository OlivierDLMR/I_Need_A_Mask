import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {View, Text, Button} from 'react-native';
import PharmacieListScreen from './PharmacieListScreen';
import PharmacieScreen from './PharmacieScreen';

import ListPharmacie from '../container/ListPharmacieContainer';

const Stack = createStackNavigator();

class Search extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150}}>

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title='Rechercher'
                    onPress={() =>
                        navigation.navigate('')}
                />
                <Stack.Navigator>
                    <Stack.Screen name='PharmacieListScreen' component={PharmacieListScreen}/>
                    <Stack.Screen name='PharmacieScreen' component={PharmacieScreen}/>
                </Stack.Navigator>
                <ListPharmacie/>

            </View>

        );
    }
}


export default Search;
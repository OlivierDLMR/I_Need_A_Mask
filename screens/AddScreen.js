import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import FormPharmacieContainer from "../container/FormPharmacieContainer";

class AddScreen extends Component {

    render() {
        return (
            <ScrollView style={{padding: 25}}>
                <Text style={{color: 'black', fontSize: 25, textAlign: 'center', marginBottom: 40}}>
                    Ajouter une pharmacie
                </Text>
                <View style={{fontSize: 15, marginBottom: 10}}>
                    <FormPharmacieContainer/>
                </View>
            </ScrollView>
        );
    }
}

export default AddScreen;
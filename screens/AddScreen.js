import React, {Component} from 'react';
import {ScrollView, Text, TextInput, Button, View} from 'react-native';
import FormPharmacieContainer from "../container/FormPharmacieContainer";

class AddScreen extends Component {

    render() {
        return (
            <ScrollView style={{padding: 25}}>

                <View style={{fontSize: 15, marginBottom: 10}}>
                    <FormPharmacieContainer/>
                </View>
            </ScrollView>
        );
    }
}

export default AddScreen;
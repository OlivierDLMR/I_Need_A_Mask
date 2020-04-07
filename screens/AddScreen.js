import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';



class AddScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style = {{ padding:20 }}>
                    <Text style = {{ color: 'black', fontSize: 50, textAlign: 'center', marginBottom: 20 }}>
                        Ajouter une pharmacie
                    </Text>

                    <Text style={{ marginBottom: 10, fontSize: 20 }}>Nom</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                name="Nom"
                                Type='TextInput' returnKeyType='done'
                                placeholder=' Nom'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Adresse</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                name="Adresse"
                                Type='TextInput' returnKeyType='done'
                                placeholder=' Adresse'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Latitude</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                name="Latitude"
                                Type='TextInput' returnKeyType='done'
                                placeholder=' Latitude'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Longitude</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                name="Longitude"
                                Type='TextInput' returnKeyType='done'
                                placeholder=' Longitude'/>



                    <Button title='Enregistrer' onPress={() => this.onSubmit()}
                            style={{ marginTop: 20 }}/>

                </View>
            </ScrollView>

        );
    }
}


export default AddScreen;
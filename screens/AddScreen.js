import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';



class AddScreen extends Component {
    render() {
        return (
            <View style = {{ padding:20 }}>
                <Text style = {{ color: 'black', fontSize: 50, textAlign: 'center' }}>
                    Ajouter une pharmacie
                </Text>

                <Text>Nom</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1}}
                            name="Nom"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Nom'/>

                <Text>Adresse</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1}}
                            name="Adresse"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Adresse'/>

                <Text>Latitude</Text>
                <TextInput  style={{ height:40, borderColor:'gray', borderWidth: 1}}
                            name="Latitude"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Latitude'/>

                <Text>Longitude</Text>
                <TextInput  style={{ height:40, borderColor:'gray', borderWidth: 1}}
                            name="Longitude"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Longitude'/>

                <Text>Mask</Text>
                <TextInput  style={{ height:40, borderColor:'gray', borderWidth: 1}}
                            name="NombreMask"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Nombre de masque'/>

                <Button title='Enregistrer' onPress={() => this.onSubmit()}
                        style={{ paddingTop: 10 }}/>




            </View>

        );
    }
}


export default AddScreen;
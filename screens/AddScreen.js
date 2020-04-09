import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import AddPharmacie from "../container/AddPharmacie";


class AddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', address: '', latitude: '', longitude: '', mask: '' }
    }

    onSubmit() {
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.latitude);
        console.log(this.state.longitude);
        console.log(this.state.mask);

        this.props.addPharmacie({
            name: this.state.name,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            mask: this.state.mask,
        });
        this.setState({ name: '', address: '', latitude: '', longitude: '', mask: '' })
    }

    render() {
        return (
            <ScrollView>
                <View style = {{ padding:20 }}>
                    <Text style = {{ color: 'black', fontSize: 50, textAlign: 'center', marginBottom: 20 }}>
                        Ajouter une pharmacie
                    </Text>

                    <Text style={{ marginBottom: 10, fontSize: 20 }}>Nom</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                value={this.state.name}
                                onChangeText={text => this.setState({name: text})}
                                placeholder=' Nom'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Adresse</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                value={this.state.address}
                                onChangeText={text => this.setState({address: text})}
                                placeholder=' Adresse'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Latitude</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                value={this.state.latitude}
                                onChangeText={text => this.setState({latitude: text})}
                                placeholder=' Latitude'/>

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Longitude</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                value={this.state.longitude}
                                onChangeText={text => this.setState({longitude: text})}
                                placeholder=' Longitude'/>



                    <Button title='Enregistrer' onPress={() => this.onSubmit()}
                            style={{ marginTop: 20 }}/>

                            <AddPharmacie/>

                </View>
            </ScrollView>

        );
    }
}


export default AddScreen;
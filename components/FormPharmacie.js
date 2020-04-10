import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
// import AddPharmacie from "../container/AddPharmacie";


class FormPharmacie extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', adresse: '', latitude: '', longitude: '', masque: '' }
    }

    onSubmit() {
        console.log(this.state.name);
        console.log(this.state.adresse);
        console.log(this.state.latitude);
        console.log(this.state.longitude);
        console.log(this.state.masque);

        this.props.addPharmacie({

            name: this.state.name,
            adresse: this.state.adresse,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            masques: this.state.masque,
        });
        this.setState({ name: '', adresse: '', latitude: '', longitude: '', masque: '' })
    }

    render() {
        return (

                <View >


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

                    <Text style={{ marginBottom: 10, fontSize: 15 }}>Masques</Text>
                    <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 20}}
                                value={this.state.masque}
                                onChangeText={text => this.setState({masque: text})}
                                placeholder=' Masques'/>


                    <Button title='Enregistrer' onPress={() => this.onSubmit()}
                            style={{ marginTop: 20 }}/>


                </View>


        );
    }
}


export default FormPharmacie;


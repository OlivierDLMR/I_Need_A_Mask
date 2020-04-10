import React, {Component} from "react";
import {Text, View} from "react-native";


class ItemPharmacie extends Component {

    render() {
        const {pharmacie} = this.props;
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../assets/logopharma.png')} style={{width: 100, height: 100, marginBottom: 20}}
                />
                <Text style={{ fontSize: 20, marginBottom: 20 }}>
                    Pharmacie {pharmacie.name}
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 20 }}>
                    Adresse {pharmacie.adresse}
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 20 }}>
                    Masques disponibles {pharmacie.masque}
                </Text>
            </View>
        );
    }
}

export default ItemPharmacie;
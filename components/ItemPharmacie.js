import React, {Component} from "react";
import {Text, View, Image} from "react-native";


class ItemPharmacie extends Component {

    render() {
        const {pharmacie} = this.props;
        return (
            <View style={{ alignItems: 'center' }}>


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
import React, {Component} from 'react';
import {View} from "react-native";
import ItemPharmacieContainer from "../container/ItemPharmacieContainer";

class PharmacieScreen extends Component {
    render() {
        const {pharmacie} = this.props.route.params;
        return (
            <View style={{marginTop: 50}}>
                <ItemPharmacieContainer pharmacie={pharmacie}/>
            </View>
        );
    }
}

export default PharmacieScreen;
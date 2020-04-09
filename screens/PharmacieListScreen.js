import React, {Component} from 'react';
import {View, Text} from "react-native";
import ListPharmacieContainer from "../container/ListPharmacieContainer";

class PharmacieListScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <ListPharmacieContainer navigate={navigate}/>
            </View>
        );
    }
}

export default PharmacieListScreen;
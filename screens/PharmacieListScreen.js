import React, {Component} from 'react';
import {View} from 'react-native';
import ListPharmacieContainer from "../container/ListPharmacieContainer";

class PharmacieListScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ padding: 25}}>
                <ListPharmacieContainer navigate={navigate}/>
            </View>
        );
    }
}

export default PharmacieListScreen;
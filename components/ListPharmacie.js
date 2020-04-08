import React, {Component} from 'react';
import {Button, FlatList} from "react-native";

class ListPharmacie extends Component {

    componentDidMount() {
        this.props.fetchPharmacies()
    }

    render() {
        console.log(this.props.pharmacies);
        return (
            <FlatList
                data={this.props.pharmacies}
                renderItem={({item}) => <Button title={item.name}/>}
                keyExtractor={item => item._id}
            />
        );
    }
}

export default ListPharmacie;
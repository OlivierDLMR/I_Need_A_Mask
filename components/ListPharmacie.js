import React, {Component} from 'react';
import {Button, FlatList, View} from "react-native";

class ListPharmacie extends Component {

    componentDidMount() {
        this.props.fetchPharmacies()
    }

    render() {
        const {
            pharmacies,
            loading,
        } = this.props;

        if (loading) {
            return (<ActivityIndicator size='large'/>);
        }

        return (
            <View style={{marginTop: 50, marginBottom: 50}}>

                <Button title='Rechercher' onPress={() => this.props.fetchPharmacies()}/>
                <FlatList data={pharmacies}
                          renderItem={({item}) =>
                              <Button
                                  title={item.name}
                                  onPress={() =>
                                      this.props.navigate('PharmacieScreen', {pharmacie:item})
                                  }>
                              </Button>}
                          keyExtractor={item => item._id}
                />
            </View>
        );
    }
}

export default ListPharmacie;
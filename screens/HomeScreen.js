import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';


class HomeScreen extends Component {
    render() {
        return (
            <View style={{ marginTop: 1, flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                <Image
                    source={require('../assets/smiley.png')} style={{width: 200, height: 200}}
                />
                <Text style={{ color: 'black', fontSize: 65, textAlign: 'center'}}>
                    I Need A Mask
                </Text>
            </View>
        );
    }
}

export default HomeScreen;
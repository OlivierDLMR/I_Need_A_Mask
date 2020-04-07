import React, {Component} from "react";
import {View, TextInput, Button} from 'react-native';

class AddPharmacie extends Component {

    constructor(props) {
        super(props);
        this.state = {[
            name: '',
            adresse: '',
            latitude: '',
            longitude: ''
                ]}
    }
}




render() {

    const items = this.props.pharmacies.map((d, key) => (
        <article key={key}>
            <button>{d.title}</button>
            <button onClick={(event) => this.props.remove(d)}>Remove</button>
        </article>
    ));

    return (
        <div>
            <h2>Dashboards</h2>
            <section>
                {items}
                <button onClick={(event) => this.props.add({title: 'ok'})}>Add</button>
            </section>
        </div>
    );
}
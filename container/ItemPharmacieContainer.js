import { connect } from 'react-redux0';
import ItemPharmacie from '../components/ItemPharmacie';
import {fetchPharmacies} from "../action/pharmacies";


const mapStateToProps = state => {
    return {
        loading: state.pharmacie.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPharmacie);
import { connect } from 'react-redux';
import  ListPharmacie from '../components/ListPharmacie';
import {
    fetchPharmacies

} from "../action/pharmacies";



const mapStateToProps = state => {
    return {
        pharmacies: state.pharmacie.pharmacies,
        loading: state.pharmacie.loading

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPharmacie);
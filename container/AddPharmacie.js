import { connect } from 'react-redux'
import { addPharmacie } from "../action/pharmacies"
import Pharmacies from '../components/AddPharmacieForm'

const mapStateToProps = state => {
    return {
        pharmacie: state.pharmacie.name,
        loading: state.pharmacie.loading
    };
};


const mapDispatchToProps = dispatch => ({
    add: (pharmacie) => dispatch(addPharmacie(pharmacie)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pharmacies)


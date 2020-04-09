import { connect } from 'react-redux';
import { addPharmacie } from '../action/addPharmacie';
import FormPharmacie from '../components/FormPharmacie';


const mapStateToProps = state => {
    return {
        pharmacie: state.pharmacie.name,
        loading: state.pharmacie.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPharmacie: pharmacie => dispatch(addPharmacie(pharmacie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPharmacie);
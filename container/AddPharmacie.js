import { connect } from 'react-redux'
import { pharmacieAdd, pharmacieRemove } from "../action"
import Pharmacies from '../components/AddPharmacieForm'

const mapStateToProps = state => ({AddPharmacieForm: state.pharmacie.items})

const mapDispatchToProps = dispatch => ({
    add: (pharmacie) => dispatch(pharmacieAdd(pharmacie)),
    remove: (pharmacie) => dispatch(pharmacieRemove(pharmacie))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pharmacies)


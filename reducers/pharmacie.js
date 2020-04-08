import { FETCH_PHARMACIES_SUCCESS, ADD_PHARMACIE_SUCCESS} from "../action/pharmacies";

const initialState = { pharmacies: [] }; // Sera accessible via state.pharmacie.items

function pharmacie(state = initialState, action) {
    switch (action.type) {

        case ADD_PHARMACIE_SUCCESS:
            return { pharmacies: [...state.pharmacies, action.payload] }
        case FETCH_PHARMACIES_SUCCESS:
            return { pharmacies: action.payload }
        default:
            return state
    }
}

export default pharmacie;
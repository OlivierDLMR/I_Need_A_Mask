import { FETCH_PHARMACIES_REQUEST,
        FETCH_PHARMACIES_SUCCESS
        } from "../action/pharmacies";

import {
    ADD_PHARMACIE_REQUEST,
    ADD_PHARMACIE_SUCCESS,
} from '../action/addPharmacie';

const initialState = { pharmacies: [] }; // Sera accessible via state.pharmacie.items

function pharmacie(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHARMACIES_REQUEST:
            return { ...state, loading: true };
        case ADD_PHARMACIE_REQUEST:
            return { ...state, loading: true };
        case ADD_PHARMACIE_SUCCESS:
            return { pharmacies: [...state.pharmacies, action.payload] }
        case FETCH_PHARMACIES_SUCCESS:
            return { pharmacies: action.payload }
        default:
            return state
    }
}

export default pharmacie;
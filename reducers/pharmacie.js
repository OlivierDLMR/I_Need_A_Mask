import {
    FETCH_PHARMACIES_REQUEST,
    FETCH_PHARMACIES_SUCCESS,
    FETCH_PHARMACIES_FAILURE
} from '../action/pharmacies';

import {
    ADD_PHARMACIE_REQUEST,
    ADD_PHARMACIE_SUCCESS,
    ADD_PHARMACIE_FAILURE,
} from '../action/addPharmacie';

const initialState = {
    pharmacies: []
};

function pharmacie(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHARMACIES_REQUEST:
            return { ...state, loading: true };
        case ADD_PHARMACIE_REQUEST:
            return { ...state, loading: true };
        case FETCH_PHARMACIES_SUCCESS:
            return {
                ...state,
                pharmacies: action.payload,
                loading: false
            };
        case ADD_PHARMACIE_SUCCESS:
            return { pharmacies: [...state.pharmacies, action.payload]};

        case FETCH_PHARMACIES_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case ADD_PHARMACIE_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default pharmacie;


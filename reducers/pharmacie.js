import { PHARMACIE_ADD, PHARMACIE_REMOVE } from "../action";

const initialState = { items: [] }; // Sera accessible via state.pharmacie.items

function pharmacie(state = initialState, action) {
    switch (action.type) {
        case PHARMACIE_ADD:
            return { items: [...state.items, action.payload.pharmacies] };
        case PHARMACIE_REMOVE:
            return { items: state.items.filter(d => d !== action.payload.pharmacies) };
        default:
            return state
    }
}

export default pharmacie;
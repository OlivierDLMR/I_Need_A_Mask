export const ADD_PHARMACIE_REQUEST = 'ADD_PHARMACIE_REQUEST';
export const ADD_PHARMACIE_SUCCESS = 'ADD_PHARMACIE_SUCCESS';
export const ADD_PHARMACIE_FAILURE = 'ADD_PHARMACIE_FAILURE';

export function addPharmacie(pharmacie) {
    return function (dispatch) {
        dispatch(addPharmacieRequest());
        return fetch('http://192.168.1.23:4000/pharmacies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pharmacie)
        })
            .then(
                response => response.json(),
                error => dispatch(addPharmacieFailure(error))
            )
            .then(pharmacie => {
                dispatch(addPharmacieSuccess(pharmacie));

            });
    }
}

export function addPharmacieRequest() {
    return { type: ADD_PHARMACIE_REQUEST }
}

export function addPharmacieSuccess(pharmacie) {
    return { type: ADD_PHARMACIE_REQUEST, payload: { pharmacie: pharmacie} };
}

export function addPharmacieFailure(error) {
    return { type: ADD_PHARMACIE_REQUEST, payload: error };
}
import pharmacie from "../reducers/pharmacie";

export const ADD_PHARMACIE_REQUEST = "ADD_PHARMACIE_REQUEST";
export const ADD_PHARMACIE_SUCCESS = "ADD_PHARMACIE_SUCCESS";
export const ADD_PHARMACIE_FAILURE = "ADD_PHARMACIE_FAILURE";

export function addPharmacie(pharmacie) {
    return function (dispatch) {
        dispatch(addPharmacieRequest());
        return fetch('http://192.168.1.23:4000/pharmacies'
            , {
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
            .then(data => {
                dispatch(addPharmacieSuccess(data));
            });
    }
}

// fonction pour rajouter une pharmacie

export function addPharmacieRequest() {
    return { type: ADD_PHARMACIE_REQUEST};
}

export function addPharmacieSuccess() {
    return { type: ADD_PHARMACIE_SUCCESS, payload: { pharmacie: pharmacie}  };
}

export function addPharmacieFailure() {
    return { type: ADD_PHARMACIE_FAILURE, payload: error  };
}


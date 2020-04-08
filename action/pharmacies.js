export const FETCH_PHARMACIES_REQUEST = "FETCH_PHARMACIES_REQUEST";
export const FETCH_PHARMACIES_SUCCESS = "FETCH_PHARMACIES_SUCCESS";
export const FETCH_PHARMACIES_FAILURE = "FETCH_PHARMACIES_FAILURE";

export const ADD_PHARMACIE_REQUEST = "ADD_PHARMACIE_REQUEST";
export const ADD_PHARMACIE_SUCCESS = "ADD_PHARMACIE_SUCCESS";
export const ADD_PHARMACIE_FAILURE = "ADD_PHARMACIE_FAILURE";


export function fetchPharmacies() {
            return function (dispatch) {
                dispatch(fetchPharmaciesRequest());
                return fetch('http://192.168.1.23:4000/pharmacies')
                    .then(
                        response => response.json(),
                        error => dispatch(fetchPharmaciesFailure(error))
                    )
                    .then(data => {
                        dispatch(fetchPharmaciesSuccess(data));
                    });
    }
}
export function fetchPharmaciesRequest() {
    return { type: FETCH_PHARMACIES_REQUEST };
}
export function fetchPharmaciesSuccess(pharmacies) {
    return { type: FETCH_PHARMACIES_SUCCESS, payload: pharmacies };
}
export function fetchPharmaciesFailure(error) {
    return { type: FETCH_PHARMACIES_FAILURE, payload: error };
}



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
    return { type: ADD_PHARMACIE_SUCCESS, payload: pharmacie  };
}

export function addPharmacieFailure() {
    return { type: ADD_PHARMACIE_FAILURE, payload: error  };
}



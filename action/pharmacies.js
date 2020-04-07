export const FETCH_PHARMACIES_REQUEST = "FETCH_PHARMACIES_REQUEST";
export const FETCH_PHARMACIES_SUCCESS = "FETCH_PHARMACIES_SUCCESS";
export const FETCH_PHARMACIES_FAILURE = "FETCH_PHARMACIES_FAILURE";


export function fetchPharmacies() {
    return function (dispatch) {
        dispatch(fetchPharmaciesRequest());
        return fetch('http://192.168.1.23:4000')
            .then(
                response => response.json(),
                error => dispatch(fetchPharmaciesFailure(error))
            )
            .then(data => {
                dispatch(fetchPharmaciesSucces(pharmacies, data.name));
            });
    }
}
export function fetchPharmaciesRequest() {
    return { type: FETCH_PHARMACIES_REQUEST };
}
export function fetchPharmaciesSucces(pharmacies, name) {
    return { type: FETCH_PHARMACIES_SUCCESS, payload: { pharmacies: pharmacies, name: name} };
}
export function fetchPharmaciesFailure(error) {
    return { type: FETCH_PHARMACIES_FAILURE, payload: error };
}


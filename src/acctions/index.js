export const setFavorite = payload => ({
    type: "SET_FAVORITE",
    payload
});

export const deleteFavorites = payload => ({
    type: "DELETE_FAVORITES",
    payload
});

export const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload
});
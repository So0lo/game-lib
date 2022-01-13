import { gamePageActionTypes } from "./gamePageActionTypes";

export const showGame = (gameId, changeLoadingStatus) => {
    return (dispatch) => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            dispatch({
                type: gamePageActionTypes.GAME,
                payload: res
            });
        })
        .finally(() => changeLoadingStatus(false));
    }
}

export const showMovies = (gameId) => {
    return (dispatch) => {
        fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=fc5d17fd5f594b359a91a8ec9bcd0d53`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            dispatch({
                type: gamePageActionTypes.MOVIES,
                payload: res.results
            });
        });
    }
}

export const showComments = (gameId, currentPage) => {
    return (dispatch) => {
        fetch(`https://api.rawg.io/api/games/${gameId}/reddit?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page=${currentPage}`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then((res) => {
            dispatch({
                type: gamePageActionTypes.COMMENTS,
                payload: {
                    comments: res.results,
                    currentPage: currentPage + 1,
                    chekPage: !res.next ? false : true
                }
            });
        });
    }
}

export const clearGame = () => ({
    type: gamePageActionTypes.CLEAR_GAME,
    payload: []
});

export const setComments = (newComment) => ({
    type: gamePageActionTypes.SET_COMMENTS,
    payload: newComment
});

export const setFetching = (bool) => ({
    type: gamePageActionTypes.SET_FETCHING,
    payload: bool
});
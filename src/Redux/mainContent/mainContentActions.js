import { mainContentActionTypes } from "./mainContentActionTypes";

export const showGames = (currentPage, searchText, genresFilter, tagsFilter, platformsFilter, changeLoadingStatus) => {
    return (dispatch) => {
        fetch(`https://api.rawg.io/api/games?key=fc5d17fd5f594b359a91a8ec9bcd0d53&page_size=20&page=${currentPage}${searchText ? `&search=${searchText}` : ''}${genresFilter ? `&genres=${genresFilter}` : ''}${tagsFilter ? `&tags=${tagsFilter}` : ''}${platformsFilter ? `&parent_platforms=${platformsFilter}` : ''}`)
            .then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    throw new Error('failed fething data');
                }
                return res.json();
            })
            .then((res) => {
                dispatch({
                    type: mainContentActionTypes.SHOW_GAMES,
                    payload: {
                        games: res.results,
                        currentPage: currentPage + 1,
                        searchText,
                        genresFilter,
                        tagsFilter,
                        platformsFilter,
                        chekPage: !res.next ? false : true
                    }
                });
            })
            .finally(() => changeLoadingStatus(false));
    }
}

export const clearGames = () => ({
    type: mainContentActionTypes.CLEAR_GAMES,
    payload: []
});

export const setFetching = (bool) => ({
    type: mainContentActionTypes.SET_FETCHING,
    payload: bool
});

import cls from "./FilterTypes.module.css";

export const Genres = ({genre, changeGenresFilter, genresFilter}) => {
    return (
        <div className={cls.genreWrapper}>
            <div className={genresFilter !== genre.slug ? cls.genre : cls.selectedGenre} onClick={() => changeGenresFilter(genre.slug)}>{genre.name}</div>
        </div>
    )
};

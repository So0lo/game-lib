import cls from "./FilterTypes.module.css";

export const Genres = ({genre, changeGenresFilter, genresFilter}) => {
    return (
        <div className={cls.filterBarWrapper}>
            <div className={genresFilter !== genre.slug ? cls.filterBarItem : cls.selectedFilterBarItem} onClick={() => changeGenresFilter(genre.slug)}>{genre.name}</div>
        </div>
    )
};

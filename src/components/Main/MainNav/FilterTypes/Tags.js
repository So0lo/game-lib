import cls from "./FilterTypes.module.css";

export const Tags = ({tag, changeTagsFilter, tagsFilter}) => {
    return (
        <div className={cls.filterBarWrapper}>
            <div className={tagsFilter !== tag.slug ? cls.filterBarItem : cls.selectedFilterBarItem} onClick={() => changeTagsFilter(tag.slug)}>{tag.name}</div>
        </div>
    )
};
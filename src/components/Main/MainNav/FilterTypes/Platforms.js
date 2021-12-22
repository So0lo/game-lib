import cls from "./FilterTypes.module.css";

export const Platforms = ({platform, changePlatformsFilter, platformsFilter}) => {
    return (
        <div className={cls.filterBarWrapper}>
            <div className={platformsFilter !== platform.id ? cls.filterBarItem : cls.selectedFilterBarItem} onClick={() => changePlatformsFilter(platform.id)}>{platform.name}</div>
        </div>
    )
};
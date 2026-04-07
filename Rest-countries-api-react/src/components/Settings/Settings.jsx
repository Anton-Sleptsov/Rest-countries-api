import './Settings.css'
import searchIconDark from '../../assets/search-dark.svg'
import expandMoreDark from '../../assets/expand-more-dark.svg'

export default function Settings() {
    return (
        <div className="settings">
            <div className="container">
                <div className="settings__content">

                    <div className="settings__search search">
                        <img className="search__icon" src={searchIconDark} alt="Search" />
                        <input className="search__input" name="search" type="text" placeholder="Search for a country..." />
                    </div>

                    <div className="settings__filter filter">
                        <button className="filter__button" type="button">
                            Filter by Region
                            <span className="filter__arrow"><img src={expandMoreDark} alt="" /></span>
                        </button>

                        <ul className="filter__dropdown">
                            <li className="filter__item">Africa</li>
                            <li className="filter__item">America</li>
                            <li className="filter__item">Asia</li>
                            <li className="filter__item">Europe</li>
                            <li className="filter__item">Oceania</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
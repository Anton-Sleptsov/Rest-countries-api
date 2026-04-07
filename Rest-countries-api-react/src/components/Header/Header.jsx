import './Header.css'
import lightModeIcon from '../../assets/Light Mode Icon Container.svg'

export default function Header() {
    return <header className="header">
        <div className="container">
            <div className="header-content">
                <div className="header__title">Where in the world?</div>
                <button className="header__theme">
                    <div className="header__mode-icon">
                        <img src={lightModeIcon} alt="Light Mode Icon" />
                    </div>
                    <div className="header__mode-text">Light Mode</div>
                </button>
            </div>
        </div>
    </header>
}


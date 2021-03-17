const Menu = () => {
    return (
        <div className="menu">
        <h2 className="menu__title"><span className="menu__title--dev">Dev</span>challenges.io</h2>
        
        <ul className="menu__list">
            <li className="menu__link">Colors</li>
            <li className="menu__link">Typography</li>
            <li className="menu__link">Spaces</li>
            <li className="menu__link--active">Buttons</li>
            <li className="menu__link">Inputs</li>
            <li className="menu__link">Grid</li>
        </ul>
        </div>
    )
}

export default Menu
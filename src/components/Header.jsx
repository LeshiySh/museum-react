import React from 'react';

function Header({ theme, onThemeToggle }) {
    return (
        <header>
            <button className="theme-toggle" id="theme-toggle" title="Тема" onClick={onThemeToggle} >
                <img className="sun-icon" src="./src/assets/icons/dark_moon.svg" alt="" style={{ display: theme === 'light-theme' ? 'block' : 'none' }}/>
                <img className="moon-icon" src="./src/assets/icons/light_sun.svg" alt="" style={{ display: theme === 'dark-theme' ? 'block' : 'none' }}/>
            </button>
        </header>
    );
}

export default Header;
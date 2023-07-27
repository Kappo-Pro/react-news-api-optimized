import React from 'react';
import './Navbar.css';

function Navbar({ country, setCountry, category, setCategory, setSearchBar, getNews }) {
    const countryList = [
        { key: 'in', value: 'India' },
        { key: 'au', value: 'Australia' },
        { key: 'br', value: 'Brazil' },
        { key: 'ca', value: 'Canada' },
        { key: 'cn', value: 'China' },
    ];

    const categoryList = ['general', 'business', 'entertainment', 'health', 'technology', 'sports', 'science'];

    return (
        <nav className="navbar">
            <div className="navbar-brand">HOME</div>
            <div className="navbar-items">
                <div className="dropdown">
                    <button className="dropdown-btn">Country</button>
                    <ul className="dropdown-menu">
                        {countryList.map((item) => (
                            <li
                                key={item.key}
                                onClick={() => {
                                    setCountry(item.key);
                                    getNews();
                                }}
                            >
                                {item.value}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Category</button>
                    <ul className="dropdown-menu">
                        {categoryList.map((item) => (
                            <li
                                key={item}
                                onClick={() => {
                                    setCategory(item);
                                    getNews();
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search"
                        onChange={(event) => setSearchBar(event.target.value)}
                    />
                    <button className="search-btn" onClick={getNews}>Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

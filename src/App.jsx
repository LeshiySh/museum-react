import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import Pagination from './components/Pagination';
import FilterMenu from './components/FilterMenu';
import { getPaintings } from './api';
import './style.css';

function App() {
    const [theme, setTheme] = useState('light-theme');
    const [searchValue, setSearchValue] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [paintings, setPaintings] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [selectedArtist, setSelectedArtist] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');
    
    useEffect(() => {
        getPaintings().then(data => {
            setPaintings(data);
            setLoading(false);
        });
    }, []);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('site-theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        } else {
            document.body.className = 'light-theme';
        }
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('site-theme', newTheme);
    };
    
    const getFilteredPaintings = () => {
        let filtered = [...paintings];
        
        if (searchValue.trim()) {
            filtered = filtered.filter(painting =>
                painting.title.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        
        if (selectedArtist) {
            filtered = filtered.filter(painting => painting.artist === selectedArtist);
        }
        
        if (selectedLocation) {
            filtered = filtered.filter(painting => painting.location === selectedLocation);
        }
        
        if (yearFrom) {
            filtered = filtered.filter(painting => painting.year >= parseInt(yearFrom));
        }
        
        if (yearTo) {
            filtered = filtered.filter(painting => painting.year <= parseInt(yearTo));
        }
        
        return filtered;
    };
    
    const clearFilters = () => {
        setSearchValue('');
        setSelectedArtist('');
        setSelectedLocation('');
        setYearFrom('');
        setYearTo('');
        setCurrentPage(1);
    };
    
    const filteredPaintings = getFilteredPaintings();
    const totalPages = Math.ceil(filteredPaintings.length / 6);
    
    if (loading) {
        return <div className="loading">Загрузка картин...</div>;
    }
    
    return (
        <div className="container">
            <Header theme={theme} onThemeToggle={toggleTheme} />
            <main>
                <Search
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    onFilterOpen={() => setIsFilterOpen(true)}
                />
                <Card paintings={filteredPaintings} currentPage={currentPage} />
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </main>
            <FilterMenu 
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                selectedArtist={selectedArtist}
                setSelectedArtist={setSelectedArtist}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                yearFrom={yearFrom}
                setYearFrom={setYearFrom}
                yearTo={yearTo}
                setYearTo={setYearTo}
                onClear={clearFilters}
            />
        </div>
    );
}

export default App;
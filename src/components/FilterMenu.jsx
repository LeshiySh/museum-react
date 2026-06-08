import React, { useState, useEffect } from 'react';

function FilterMenu({ 
    isOpen, 
    onClose, 
    selectedArtist, 
    setSelectedArtist, 
    selectedLocation, 
    setSelectedLocation, 
    yearFrom, 
    setYearFrom, 
    yearTo, 
    setYearTo,
    onClear 
}) {
    const [isArtistOpen, setIsArtistOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isYearsOpen, setIsYearsOpen] = useState(false);
    
    const artists = ['Leonardo da Vinci', 'Vincent van Gogh', 'Edvard Munch', 'Francisco Goya', 'Sandro Botticelli', 'Grant Wood', 'Rembrandt van Rijn', 'Johannes Vermeer', 'Michelangelo', 'Caravaggio', 'Diego Velazquez', 'Caspar David Friedrich', 'Eugene Delacroix', 'Georges Seurat', 'Hieronymus Bosch', 'Salvador Dali', 'Pieter Bruegel the Elder', 'Katsushika Hokusai', 'Edward Hopper'];
    const locations = ['Louvre Museum, Paris', 'MoMA, New York', 'National Gallery, Oslo', 'Museo del Prado, Madrid', 'Uffizi Gallery, Florence', 'Art Institute of Chicago', 'National Gallery of Art, Washington D.C.', 'Mauritshuis, The Hague', 'Santa Maria delle Grazie, Milan', 'Sistine Chapel, Vatican', 'San Luigi dei Francesi, Rome', 'Hamburger Kunsthalle, Hamburg', 'Kunsthistorisches Museum, Vienna', 'Metropolitan Museum of Art, New York'];
    
    const handleApply = () => {
        onClose();
    };
    
    const handleClear = () => {
        setSelectedArtist('');
        setSelectedLocation('');
        setYearFrom('');
        setYearTo('');
        onClear();
        onClose();
    };
    
    if (!isOpen) return null;
    
    return (
        <>
            <div className="filter-overlay" onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999
            }}></div>
            <div className="filter-menu active" style={{ position: 'fixed', right: 0, zIndex: 1000 }}>
                <div className="filter-menu-header">
                    <button className="filter-close" onClick={onClose}>✕</button>
                </div>
                
                <div className="filter-menu-content">
                    <div className="filter-category">
                        <div className="filter-category-header">
                            <span>ARTIST</span>
                            <button className="filter-expand" onClick={() => setIsArtistOpen(!isArtistOpen)}>
                                {isArtistOpen ? '−' : '+'}
                            </button>
                        </div>
                        {isArtistOpen && (
                            <div className="filter-category-content">
                                <select 
                                    className="filter-select" 
                                    value={selectedArtist}
                                    onChange={(e) => setSelectedArtist(e.target.value)}
                                >
                                    <option value="">All artists</option>
                                    {artists.map(artist => (
                                        <option key={artist} value={artist}>{artist}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    
                    <div className="filter-category">
                        <div className="filter-category-header">
                            <span>LOCATION</span>
                            <button className="filter-expand" onClick={() => setIsLocationOpen(!isLocationOpen)}>
                                {isLocationOpen ? '−' : '+'}
                            </button>
                        </div>
                        {isLocationOpen && (
                            <div className="filter-category-content">
                                <select 
                                    className="filter-select" 
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    <option value="">All locations</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    
                    <div className="filter-category">
                        <div className="filter-category-header">
                            <span>YEARS</span>
                            <button className="filter-expand" onClick={() => setIsYearsOpen(!isYearsOpen)}>
                                {isYearsOpen ? '−' : '+'}
                            </button>
                        </div>
                        {isYearsOpen && (
                            <div className="filter-category-content">
                                <div className="year-inputs">
                                    <input 
                                        type="number" 
                                        placeholder="From" 
                                        value={yearFrom}
                                        onChange={(e) => setYearFrom(e.target.value)}
                                    />
                                    <span>—</span>
                                    <input 
                                        type="number" 
                                        placeholder="To" 
                                        value={yearTo}
                                        onChange={(e) => setYearTo(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="filter-menu-footer">
                    <button className="filter-results" onClick={handleApply}>SHOW THE RESULTS</button>
                    <button className="filter-close-bottom" onClick={handleClear}>CLEAR</button>
                </div>
            </div>
        </>
    );
}

export default FilterMenu;
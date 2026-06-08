import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    return (
        <div className="pagination">
            <button 
                className="pagination-arrow"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Предыдущая страница"
            >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.48657 0.183396C7.31171 -0.0303263 6.9967 -0.0618274 6.78298 0.113036L0.182975 5.51304C0.0669069 5.608 -0.000406265 5.75005 -0.000406265 5.90002C-0.000406265 6.04998 0.0669069 6.19203 0.182975 6.28699L6.78298 11.687C6.9967 11.8619 7.31171 11.8304 7.48657 11.6166C7.66144 11.4029 7.62994 11.0879 7.41621 10.913L1.28919 5.90002L7.41621 0.886994C7.62994 0.71213 7.66144 0.397119 7.48657 0.183396Z" fill="#575757"/>
                </svg>
            </button>
            
            <div className="pagination-numbers">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            
            <button 
                className="pagination-arrow"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Следующая страница"
            >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.113036 0.183396C0.2879 -0.0303263 0.602912 -0.0618274 0.816634 0.113036L7.41663 5.51304C7.5327 5.608 7.60002 5.75005 7.60002 5.90002C7.60002 6.04998 7.5327 6.19203 7.41663 6.28699L0.816634 11.687C0.602911 11.8619 0.2879 11.8304 0.113036 11.6166C-0.0618274 11.4029 -0.0303262 11.0879 0.183396 10.913L6.31042 5.90002L0.183396 0.886994C-0.0303263 0.71213 -0.0618274 0.397119 0.113036 0.183396Z" fill="#575757"/>
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
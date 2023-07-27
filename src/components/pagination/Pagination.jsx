import React from 'react';

function Pagination({ page, setPage, getNews }) {
    return (
        <>
            <div style={{ maxWidth: '80vw', display: 'flex', justifyContent: 'space-between', marginLeft: '10vw', marginRight: '10vw', marginBottom: '5vw' }}>

                <button className='btn btn-primary' disabled={page === 1} onClick={() => {
                    setPage(page - 1);
                    window.scrollTo(0, 0);
                    getNews();
                }}>
                    previous page
                </button>

                <button className='btn btn-primary' onClick={() => {
                    setPage(page + 1);
                    window.scrollTo(0, 0);
                    getNews();
                }}>
                    next page
                </button>
            </div>
        </>
    );
}

export default Pagination;

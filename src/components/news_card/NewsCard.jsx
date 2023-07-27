import React from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import './NewsCard.css';

function NewsCard({ article }) {
    const { value } = useParams();

    const displayContent = () => {
        Swal.fire({
            title: article.title,
            html: `<p>${article.content}</p>`,
            customClass: 'swal-wide',
            confirmButtonText: 'Close'
        });
    };

    return (
        <div className="col-3 news-card-container">
            <div className="card">
                {value === 'news-org' ? (
                    <img className="card-img-top" src={article.urlToImage || null} alt="" />
                ) : (
                    <img className="card-img-top" src={article.image || null} alt="" />
                )}
                <div className="card-body">
                    <h5 className="card-title"><a href={article.url}>{article.title}</a></h5>
                    <p className="card-text">{article.description}</p>
                </div>
                <div className="button-container">
                    <button className='btn btn-primary' onClick={displayContent}>Read more ...</button>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;

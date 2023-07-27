import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import NewsCard from '../components/news_card/NewsCard';
import Pagination from '../components/pagination/Pagination';
import { useParams } from 'react-router-dom';

function NewsApi() {
    const { value } = useParams();

    const [data, setData] = useState([]);
    const [searchBar, setSearchBar] = useState('*');
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('*');

    useEffect(() => {
        getNews();
    }, [searchBar, country, category, page]);

    const getNews = async () => {
        try {
            let url, apiKey;

            if (value === 'news-org') {
                url = 'https://newsapi.org/v2/top-headlines';
                apiKey = '8f2ef75af4a34b45a7ca39bd5ed239bf';
            } else {
                url = 'https://gnews.io/api/v4/top-headlines';
                apiKey = '3ae540c8e40b65de660fb2081291dcbe';
            }

            const response = await axios.get(url, {
                params: {
                    q: searchBar === '*' ? undefined : searchBar,
                    country: country === '*' ? undefined : country,
                    category,
                    page,
                    apikey: apiKey
                },
            });

            setData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news.', error);
        }
    };

    return (
        <>
            <div>
                <Navbar
                    country={country}
                    setCountry={setCountry}
                    category={category}
                    setCategory={setCategory}
                    setSearchBar={setSearchBar}
                    getNews={getNews}
                />
            </div>
            <div>
                <div className="container" style={{ marginTop: 100 }}>
                    <div className="row">
                        {data.map((article) =>
                            <NewsCard key={article.url} article={article} />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Pagination page={page} setPage={setPage} getNews={getNews} />
            </div>
        </>
    );
}

export default NewsApi;

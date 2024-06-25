import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsComponent = ({ topic }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`/api/news/${topic}`)
            .then(response => setArticles(response.data.articles))
            .catch(error => console.error(error));
    }, [topic]);

    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default NewsComponent;

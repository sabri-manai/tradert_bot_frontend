import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News({ ticker }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            if (!ticker) {
                console.log("Ticker is undefined or empty");
                return;  // Prevent API calls if the ticker is not valid
            }
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/news/${ticker}`);
                if (response.data.length === 0) {
                    console.log("Received empty news array"); // Log for empty data
                }
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching the news:', error);
            }
        }
    
        fetchNews();
    }, [ticker]);  // This effect runs whenever the ticker changes
    
    return (
        <div className="space-y-4">
            {news.map((article, index) => (
                <div key={index} className="p-4 border rounded shadow">
                    <h4 className="text-lg font-bold">{article.headline}</h4>
                    <p>{article.summary || "No summary available."}</p>
                    <a href={article.url} className="text-blue-500">Read more</a>
                </div>
            ))}
        </div>
    );
}



export default News;

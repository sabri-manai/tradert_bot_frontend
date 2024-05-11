import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsBasedPredictor({ ticker }) {
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPrediction = async () => {
            setLoading(true);
            try {
                // Fetch news based prediction
                const response = await axios.get(`http://127.0.0.1:5000/api/predict/news/${ticker}`);
                setPrediction(`The predicted movement for ${ticker} is ${response.data.prediction > 0 ? 'UP' : 'DOWN'}.`);
            } catch (error) {
                setError('Failed to fetch prediction');
            } finally {
                setLoading(false);
            }
        };

        if (ticker) {
            fetchPrediction();
        }
    }, [ticker]); // Re-run the effect if ticker changes

    return (
        <div className="p-4 border rounded shadow">
            {loading ? (
                <p>Loading prediction...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <p className="text-lg font-bold text-green-600">{prediction}</p>
            )}
        </div>
    );
}

export default NewsBasedPredictor;

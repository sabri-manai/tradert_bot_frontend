import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Price({ ticker }) {
    const [price, setPrice] = useState(null);
    const [predictedPrice, setPredictedPrice] = useState(null);

    useEffect(() => {
        async function fetchPrices() {
            try {
                // Fetch current price
                const responseCurrent = await axios.get(`http://127.0.0.1:5000/api/price/${ticker}`);
                setPrice(responseCurrent.data);

                // Fetch predicted price
                const responsePredicted = await axios.get(`http://127.0.0.1:5000/api/predict/${ticker}`);
                setPredictedPrice(responsePredicted.data.predicted_close);
            } catch (error) {
                console.error('Error fetching prices:', error);
            }
        }

        fetchPrices();
    }, [ticker]);

    return (
        <div className="p-4 border rounded shadow">
            {price !== null ? (
                <>
                    <p className="text-lg font-bold">Current Price: ${price.toFixed(2)}</p>
                    {predictedPrice !== null && (
                        <p className="text-lg font-bold text-blue-500">Predicted Closing Price: ${predictedPrice.toFixed(2)}</p>
                    )}
                </>
            ) : (
                <p>Loading price...</p>
            )}
        </div>
    );
}

export default Price;

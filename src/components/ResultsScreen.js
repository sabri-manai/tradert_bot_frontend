import React, { useState } from 'react';
import Price from './Price';
import Chart from './Chart';
import News from './News';
import NewsBasedPredictor from './NewsBasedPredictor';

function ResultsScreen({ initialTicker = '' }) {
    const [ticker, setTicker] = useState(initialTicker);
    const [searchTicker, setSearchTicker] = useState('');

    // Function to trigger search
    const handleSearch = () => {
        setSearchTicker(ticker);
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Trading Bot</h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
                <input
                    type="text"
                    placeholder="Enter stock ticker"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    className="border p-2 w-full max-w-xs" // Limit the width of the input
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Search
                </button>
            </div>

            {searchTicker && (
                <>
                    <h2 className="text-xl font-bold mb-4 text-center">Results for {searchTicker}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <h3 className="text-lg font-bold mb-2">Stock Price</h3>
                            <Price ticker={searchTicker} />
                            <h3 className="text-lg font-bold mt-4 mb-2">News Based Prediction</h3>
                            <NewsBasedPredictor ticker={searchTicker} />
                            <h3 className="text-lg font-bold mt-4 mb-2">Stock Chart</h3>
                            <Chart ticker={searchTicker} />
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-lg font-bold mb-2">Stock News</h3>
                            <News ticker={searchTicker} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ResultsScreen;

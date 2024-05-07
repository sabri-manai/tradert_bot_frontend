import React, { useState } from 'react';
import Price from './Price';
import Chart from './Chart';
import News from './News';

function ResultsScreen({ initialTicker = '' }) {
    const [ticker, setTicker] = useState(initialTicker);  // Set default empty string to handle controlled input
    const [searchTicker, setSearchTicker] = useState(''); // Start with empty string to prevent rendering results initially

    // Function to trigger search
    const handleSearch = () => {
        setSearchTicker(ticker);  // This will update the components that depend on searchTicker
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Stock Dashboard</h1>
            <input
                type="text"
                placeholder="Enter stock ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value.toUpperCase())}
                className="border p-2 mb-4 w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Search
            </button>

            {searchTicker && (
                <>
                    <h2 className="text-xl font-bold mb-4">Results for {searchTicker}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <h3 className="text-lg font-bold mb-2">Stock Price</h3>
                            <Price ticker={searchTicker} />
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

import React from 'react';
import Price from './Price';
import Chart from './Chart';
import News from './News';
import SentimentPrediction from './SentimentPrediction';

function ResultsScreen({ ticker, setTicker }) {
    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Stock Dashboard</h1>
            
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Enter stock ticker"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    className="border p-2 mb-4 w-1/2"
                />
            </div>

            <h2 className="text-xl font-bold mb-4">Results for {ticker}</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <h3 className="text-lg font-bold mb-2">Stock Price</h3>
                    <Price ticker={ticker} />
                    <h3 className="text-lg font-bold mt-4 mb-2">Stock Chart</h3>
                    <Chart ticker={ticker} />
                </div>

                <div className="col-span-2">
                    <h3 className="text-lg font-bold mb-2">Stock News</h3>
                    <News ticker={ticker} />
                    <h3 className="text-lg font-bold mb-2">Sentiment Prediction</h3>
                    <SentimentPrediction ticker={ticker} />
                </div>
            </div>
        </div>
    );
}

export default ResultsScreen;

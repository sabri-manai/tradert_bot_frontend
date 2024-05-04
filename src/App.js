import React, { useState } from 'react';
import ResultsScreen from './components/ResultsScreen';

function App() {
    const [ticker, setTicker] = useState('AAPL');

    return (
        <div className="App">
            <header className="bg-blue-500 text-white">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-lg font-bold">Trader Bot</h1>
                </div>
            </header>
            <ResultsScreen ticker={ticker} setTicker={setTicker} />
        </div>
    );
}

export default App;

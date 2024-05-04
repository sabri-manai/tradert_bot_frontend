import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart({ ticker }) {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        async function fetchChartData() {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/chart/${ticker}`);
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching the chart data:', error);
            }
        }

        fetchChartData();
    }, [ticker]);

    return (
        <div className="p-4 border rounded shadow">
            {chartData && chartData.labels && chartData.datasets ? (
                <Line data={chartData} />
            ) : (
                <p>Loading or no chart data available for this ticker.</p>
            )}
        </div>
    );
}

export default Chart;

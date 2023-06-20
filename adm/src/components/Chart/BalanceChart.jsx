import React from 'react';
import { Line } from 'react-chartjs-2';

const BalanceChart = ({ items }) => {
  const getBalanceTrend = () => {
    let balance = 0;
    return items.map((item) => {
      balance += item.type === 'Entrada' ? parseFloat(item.amount) : -parseFloat(item.amount);
      return balance.toFixed(2);
    });
  };

  const chartData = {
    labels: items.map((item) => item.desc),
    datasets: [
      {
        label: 'Saldo',
        data: getBalanceTrend(),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Tendência de Saldo</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BalanceChart;

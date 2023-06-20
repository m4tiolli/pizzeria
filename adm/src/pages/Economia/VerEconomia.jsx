import React, { useState, useEffect } from 'react';
import './VerEconomia.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BalanceChart from '../../components/Chart/BalanceChart';




const VerEconomia = () => {
  const [descItem, setDescItem] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState(''); 
  const [items, setItems] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState('0.00');
  const [totalExpenses, setTotalExpenses] = useState('0.00');
  const [progressIncomes, setProgressIncomes] = useState(0);
  const [progressExpenses, setProgressExpenses] = useState(0);

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    getTotals(items);
  }, [items]);

  useEffect(() => {
    setProgressIncomes(calculateProgress(totalIncomes));
    setProgressExpenses(calculateProgress(totalExpenses));
  }, [totalIncomes, totalExpenses]);

  const loadItems = () => {
    const storedItems = JSON.parse(localStorage.getItem('db_items')) || [];
    setItems(storedItems);
  };

  const saveItemsToLocalStorage = () => {
    localStorage.setItem('db_items', JSON.stringify(items));
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    saveItemsToLocalStorage();
  };

  const addNewItem = () => {
    if (descItem === '' || amount === '' || type === '') {
      alert('Preencha todos os campos!');
      return;
    }
    const newItem = {
      desc: descItem,
      amount: Math.abs(amount).toFixed(2),
      type: type === '' ? 'Entrada' : type === 'saida' ? 'Saída' : type,
      icon: type === 'Entrada' ? 'bx bxs-chevron-up-circle' : 'bx bxs-chevron-down-circle', // Adicionado o ícone correspondente
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItemsToLocalStorage();
    // Limpar os campos de entrada
    setDescItem('');
    setAmount('');
    setType('');
  };

  const calculateProgress = (value) => {
    const totalValue = parseFloat(value);
    const totalIncomesValue = parseFloat(totalIncomes);
    const totalExpensesValue = parseFloat(totalExpenses);
    if (totalIncomesValue === 0 && totalExpensesValue === 0) {
      return 0;
    }
    const progress = (totalValue / (totalIncomesValue + totalExpensesValue)) * 100;
    return progress.toFixed(2);
  };

  const getTotals = (items) => {
    const amountIncomes = items
      .filter((item) => item.type === 'Entrada')
      .map((transaction) => Number(transaction.amount));
    const amountExpenses = items
      .filter((item) => item.type === 'Saída')
      .map((transaction) => Number(transaction.amount));
    const totalIncomes = amountIncomes.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalExpenses = Math.abs(amountExpenses.reduce((acc, cur) => acc + cur, 0)).toFixed(2);
    setTotalIncomes(totalIncomes);
    setTotalExpenses(totalExpenses);
  };

  const chartDataPizza = {
    labels: ['Entradas', 'Saídas'],
    datasets: [
      {
        data: [progressIncomes, progressExpenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const chartDataBar = {
    labels: items.map((item) => item.desc),
    datasets: [
      {
        label: 'Entradas',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: items
          .filter((item) => item.type === 'Entrada')
          .map((item) => Number(item.amount)),
      },
      {
        label: 'Saídas',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: items
          .filter((item) => item.type === 'Saída')
          .map((item) => Math.abs(Number(item.amount))),
      },
    ],
  };
  

  const options = {
   
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.dataset.label || '';
            if (label) {
              return label + ': ' + tooltipItem.parsed.y.toFixed(2);
            }
            return tooltipItem.parsed.y.toFixed(2);
          },
        },
      },
    },
  };
  
  

  return (
    <div>
      <Header />
      <Sidebar />
      <section id="content">
        {/* MAIN */}
        <main>
          <h1 className="title_Economia">Economia</h1>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="divider">/</li>
            <li>
              <a href="#" className="active">
                Dashboard
              </a>
            </li>
          </ul>
          <ProgressBar
            totalIncomes={totalIncomes}
            totalExpenses={totalExpenses}
            progressIncomes={progressIncomes}
            progressExpenses={progressExpenses}
          />

          <div className="data">
            {/* Gráfico */}
            <div className="content-data">
              <div>
                <h1>Gráfico de Pizza</h1>
                <Doughnut data={chartDataPizza} />
              </div>
            </div>
            <div className="content-data">
              <div className="head">
                <li>
                  <a>Entradas e Saídas</a>
                </li>
                <div className="menu">
                  <i className="bx bx-dots-horizontal-rounded icon"></i>
                  <ul className="menu-link">
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Save</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="newItem">
                <div className="divDesc">
                  <label htmlFor="desc">Descrição</label>
                  <input className='input_economia' type="text" id="desc" value={descItem} onChange={(e) => setDescItem(e.target.value)} />
                </div>

                <div className="divAmount">
                  <label htmlFor="amount">Valor</label>
                  <input className='input_economia' type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="divType">
                <label htmlFor="type">Tipo</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
                </select>
                </div>

                <button id="btnNew" onClick={addNewItem}>
                  Incluir
                </button>
              </div>

              <div className="divTable">
                <table>
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th className="columnAmount">Valor</th>
                      <th className="columnType">Tipo</th>
                      <th className="columnAction"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.desc}</td>
                        <td>R$ {item.amount}</td>
                        <td className="columnType">
                          {item.type === 'Entrada' ? (
                            <i className="bx bxs-chevron-up-circle"></i>
                          ) : (
                            <i className="bx bxs-chevron-down-circle"></i>
                          )}
                        </td>
                        <td className="columnAction">
                          <button onClick={() => deleteItem(index)}>
                            <i className="bx bx-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="content-data">
              <div className="chart-container">
                <h2>Gráficos</h2>
                <Bar data={chartDataBar} options={options} />
              </div>
            </div>
            <div className="content-data">
            <BalanceChart items={items} />

            </div>
            
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* NAVBAR */}
    </div>
  );
};

export default VerEconomia;
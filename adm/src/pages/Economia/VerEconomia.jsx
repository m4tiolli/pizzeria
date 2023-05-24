import React, { useState, useEffect } from 'react';
import './VerEconomia.css';

const VerEconomia = () => {
  const [descItem, setDescItem] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Entrada'); // Pré-selecionado como 'Entrada'
  const [items, setItems] = useState([]);
const [totalIncomes, setTotalIncomes] = useState('0.00');
const [totalExpenses, setTotalExpenses] = useState('0.00');


  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    getTotals(items);
  }, [items]);

// Progress Bar
  useEffect(() => {
    const allProgress = document.querySelectorAll('main .card .progress');

    allProgress.forEach((item) => {
      item.style.setProperty('--value', item.dataset.value);
    });
  }, []);

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

  const insertItem = (item, index) => {
	return (
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
	);
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
  
  

	const getTotals = (items) => {
		const amountIncomes = items
			.filter((item) => item.type === 'Entrada')
			.map((transaction) => Number(transaction.amount));
		const amountExpenses = items
			.filter((item) => item.type === 'Saída')
			.map((transaction) => Number(transaction.amount));

		const totalIncomes = amountIncomes.reduce((acc, cur) => acc + cur, 0).toFixed(2);
		const totalExpenses = Math.abs(amountExpenses.reduce((acc, cur) => acc + cur, 0)).toFixed(2);
		const totalItems = (totalIncomes - totalExpenses).toFixed(2);

		document.querySelector('.incomes').innerHTML = totalIncomes;
		document.querySelector('.expenses').innerHTML = totalExpenses;
		document.querySelector('.total').innerHTML = totalItems;
		

		
	};
	return (

		<div>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link
				href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
				rel="stylesheet"
			/>
			<link rel="stylesheet" href="VerEconomia.css" />
			<title>AdminSite</title>
			<section id="content">
				{/* MAIN */}
				<main>
					<h1 className="title">Dashboard</h1>
					<ul className="breadcrumbs">
						<li><a href="#">Home</a></li>
						<li className="divider">/</li>
						<li><a href="#" className="active">Dashboard</a></li>
					</ul>
					<div className="info-data">
						<div className="card">
							<div className="head">
								<div>
									<h2 className="incomes"><span className="incomes">0.00</span></h2>
									<p>Entradas: R$</p>
								</div>
								<i className='bx bx-trending-up icon'></i>
							</div>
							<span className="progress" data-value="40%"></span>
							<span className="label">40%</span>
						</div>
						<div className="card">
							<div className="head">
								<div>
									<h2 className="expenses"><span className="expenses">0.00</span></h2>
									<p>Saídas: R$</p>
								</div>
								<i className='bx bx-trending-down icon down'></i>
							</div>
							<span className="progress" data-value="60%"></span>
							<span className="label">60%</span>
						</div>
						<div className="card">
							<div className="head">
								<div>
									<h2 className="incomes"><span className="total">0.00</span></h2>
									<p>Total: R$</p>
								</div>
							</div>
							<span className="progress" data-value="30%"></span>
							<span className="label">30%</span>
						</div>
					</div>
					{/*Report */}
					<div className="data">
						{/*  */}
						<div className="content-data">
						</div>
						<div className="content-data">
							<div className="head">
								<li><a href="#">Relatório Mensal</a></li>
								<li>/</li>
								<li><a href="#" className="active">Relatório Anual</a></li>
								<div className="menu">
									<i className='bx bx-dots-horizontal-rounded icon'></i>
									<ul className="menu-link">
										<li><a href="#">Edit</a></li>
										<li><a href="#">Save</a></li>
										<li><a href="#">Remove</a></li>
									</ul>
								</div>
							</div>
							<div className="newItem">
								<div className="divDesc">
									<label htmlFor="desc">Descrição</label>
									<input type="text" id="desc" value={descItem} onChange={(e) => setDescItem(e.target.value)} />
								</div>

								<div className="divAmount">
									<label htmlFor="amount">Valor</label>
									<input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
								</div>

								<div className="divType">
									<label htmlFor="type">Tipo</label>
									<select id="type" value={type} onChange={(e) => setType(e.target.value)}>
										<option value="Entrada">Entrada</option>
										<option value="Saída">Saída</option>
									</select>
								</div>

								<button id="btnNew" onClick={addNewItem}>Incluir</button>
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
											insertItem(item, index)
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
				{/* MAIN */}
			</section>
			{/* NAVBAR */}
		</div>
	);
}

export default VerEconomia;

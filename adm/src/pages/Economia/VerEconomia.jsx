import React,{useState} from 'react';
import './VerEconomia.css'
export default function VerEconomia() {
// // PROGRESSBAR
// const allProgress = document.querySelectorAll('main .card .progress');

// allProgress.forEach(item=> {
// 	item.style.setProperty('--value', item.dataset.value)
// })

// //Relatório de vendas
// const tbody = document.querySelector("tbody");
// const descItem = document.querySelector("#desc");
// const amount = document.querySelector("#amount");
// const type = document.querySelector("#type");
// const btnNew = document.querySelector("#btnNew");

// const incomes = document.querySelector(".incomes");
// const expenses = document.querySelector(".expenses");
// const total = document.querySelector(".total");

// let items;

// btnNew.onclick = () => {
//   if (descItem.value === "" || amount.value === "" || type.value === "") {
//     return alert("Preencha todos os campos!");
//   }

//   items.push({
//     desc: descItem.value,
//     amount: Math.abs(amount.value).toFixed(2),
//     type: type.value,
//   });

//   setItensBD();

//   loadItens();

//   descItem.value = "";
//   amount.value = "";
// };

// function deleteItem(index) {
//   items.splice(index, 1);
//   setItensBD();
//   loadItens();
// }

// function insertItem(item, index) {
//   let tr = document.createElement("tr");

//   tr.innerHTML = `
//     <td>${item.desc}</td>
//     <td>R$ ${item.amount}</td>
//     <td class="columnType">${
//       item.type === "Entrada"
//         ? '<i class="bx bxs-chevron-up-circle"></i>'
//         : '<i class="bx bxs-chevron-down-circle"></i>'
//     }</td>
//     <td class="columnAction">
//       <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//     </td>
//   `;

//   tbody.appendChild(tr);
// }

// function loadItens() {
//   items = getItensBD();
//   tbody.innerHTML = "";
//   items.forEach((item, index) => {
//     insertItem(item, index);
//   });

//   getTotals();
// }

// function getTotals() {
//   const amountIncomes = items
//     .filter((item) => item.type === "Entrada")
//     .map((transaction) => Number(transaction.amount));

//   const amountExpenses = items
//     .filter((item) => item.type === "Saída")
//     .map((transaction) => Number(transaction.amount));

//   const totalIncomes = amountIncomes
//     .reduce((acc, cur) => acc + cur, 0)
//     .toFixed(2);

//   const totalExpenses = Math.abs(
//     amountExpenses.reduce((acc, cur) => acc + cur, 0)
//   ).toFixed(2);

//   const totalItems = (totalIncomes - totalExpenses).toFixed(2);

//   incomes.innerHTML = totalIncomes;
//   expenses.innerHTML = totalExpenses;
//   total.innerHTML = totalItems;

  
// }

// const getItensBD = () => JSON.parse(localStorage.getItem("db_items")) ?? [];
// const setItensBD = () =>
//   localStorage.setItem("db_items", JSON.stringify(items));

// loadItens();
  

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
			<h1 class="title">Dashboard</h1>
			<ul class="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li class="divider">/</li>
				<li><a href="#" class="active">Dashboard</a></li>
			</ul>
			<div class="info-data">
				<div class="card">
					<div class="head">
						<div>
							<h2 class="incomes"><span class="incomes">0.00</span></h2>
							<p>Entradas: R$</p>
						  </div>
						<i class='bx bx-trending-up icon' ></i>
					</div>
					<span class="progress" data-value="40%"></span>
					<span class="label">40%</span>
				</div>
				<div class="card">
					<div class="head">
						<div>
							<h2 class="expenses"><span class="expenses">0.00</span></h2>
							<p>Saídas: R$</p>
						</div>
						<i class='bx bx-trending-down icon down' ></i>
					</div>
					<span class="progress" data-value="60%"></span>
					<span class="label">60%</span>
				</div>
				<div class="card">
					<div class="head">
						<div>
							<h2 class="incomes"><span class="total">0.00</span></h2>
							<p>Total: R$</p>
						  </div>
					</div>
					<span class="progress" data-value="30%"></span>
					<span class="label">30%</span>
				</div>
			</div>
      {/*Report */}
      <div className="data">
       
          {/*  */}
          <div class="content-data">
          </div>
      <div class="content-data">
					<div class="head">
							<li><a href="#">Relatório Mensal</a></li>
							<li>/</li>
							<li><a href="#" class="active">Relatório Anual</a></li>
						
						<div class="menu">
							<i class='bx bx-dots-horizontal-rounded icon'></i>
							<ul class="menu-link">
								<li><a href="#">Edit</a></li>
								<li><a href="#">Save</a></li>
								<li><a href="#">Remove</a></li>
							</ul>
						</div>
					</div>
          
				
					  <div class="newItem">
						<div class="divDesc">
						  <label for="desc">Descrição</label>
						  <input type="text" id="desc" />
						</div>
						<div class="divAmount">
						  <label for="amount">Valor</label>
						  <input type="number" id="amount" />
						</div>
						<div class="divType">
						  <label for="type">Tipo</label>
						  <select id="type">
							<option>Entrada</option>
							<option>Saída</option>
						  </select>
						</div>
						<button id="btnNew">Incluir</button>
					  </div>
					  <div class="divTable">
						<table>
						  <thead>
							<tr>
							  <th>Descrição</th>
							  <th class="columnAmount">Valor</th>
							  <th class="columnType">Tipo</th>
							  <th class="columnAction"></th>
							</tr>
						  </thead>
						  <tbody>
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
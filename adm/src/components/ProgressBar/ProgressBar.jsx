import React from 'react';

const ProgressBar = ({ totalIncomes, totalExpenses, progressIncomes, progressExpenses }) => {
  const calculateProgress = () => {
    const totalValue = parseFloat(totalIncomes) - parseFloat(totalExpenses);
    const totalIncomesValue = parseFloat(totalIncomes);
    const totalExpensesValue = parseFloat(totalExpenses);

    if (totalIncomesValue === 0 && totalExpensesValue === 0) {
      return 0;
    }

    const progress = (totalValue / (totalIncomesValue + totalExpensesValue)) * 100;
    return progress.toFixed(2);
  };

  return (
    <div className="info-data">
      <div className="card">
        <div className="head">
          <div>
            <h2 className="incomes">
              <span className="incomes">{totalIncomes}</span>
            </h2>
            <p>Entradas: R$</p>
          </div>
          <i className="bx bx-trending-up icon"></i>
        </div>
        <span
          className="progress"
          style={{ '--value': `${progressIncomes}%` }}
          data-value={progressIncomes}
        ></span>
        <span className="label">{`${progressIncomes}%`}</span>
      </div>
      <div className="card">
        <div className="head">
          <div>
            <h2 className="expenses">
              <span className="expenses">{totalExpenses}</span>
            </h2>
            <p>Saídas: R$</p>
          </div>
          <i className="bx bx-trending-down icon down"></i>
        </div>
        <span
          className="progress"
          style={{ '--value': `${progressExpenses}%` }}
          data-value={progressExpenses}
        ></span>
        <span className="label">{`${progressExpenses}%`}</span>
      </div>
      <div className="card">
        <div className="head">
          <div>
            <h2 className="incomes">
              <span className="total">{totalIncomes - totalExpenses}</span>
            </h2>
            <p>Total: R$</p>
          </div>
        </div>
        <span
          className="progress"
          style={{
            '--value': `${calculateProgress()}%`,
          }}
          data-value={calculateProgress()}
        ></span>
        <span className="label">{`${calculateProgress()}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from 'react';
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const StockPage = ({ stock }) => {
  // Obtém as categorias do estoque
  const categories = Object.keys(stock);

  return (
    
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="container">
        <h1 className="StockPage-title">Stock Service</h1>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {stock[category].map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
        </div>
      
    </div>
  );
};

const VerEstoque = () => {
  const stock = {
    pizza: [
      {
        id: 1,
        name: 'Pizza',
        description: 'Fresh and delicious',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1604783901926-87b8f7c08233',
        quantity: 10,
      },
      {
        id: 2,
        name: 'Sweet Pizza',
        description: 'Sweet and ripe',
        price: 0.99,
        image: 'https://images.unsplash.com/photo-1528822438211-0dffb0d566ce',
        quantity: 5,
      },
    ],
    more: [
      {
        id: 3,
        name: 'Candy',
        description: 'Crunchy and healthy',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1592222983279-ea7eef69fb70',
        quantity: 20,
      },
      {
        id: 4,
        name: 'Soda',
        description: 'Nutritious and delicious',
        price: 3.99,
        image: '',
        quantity: 15,
      },
    ],
  };

  return <StockPage stock={stock} />;
};

export default VerEstoque;

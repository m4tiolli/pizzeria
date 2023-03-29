import React from 'react';

const StockPage = ({ stock }) => {
  // Obtém as categorias do estoque
  const categories = Object.keys(stock);

  return (
    <div>
      <h1>Stock Page</h1>
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
  );
};

const VerEstoque = () => {
  const stock = {
    fruits: [
      {
        id: 1,
        name: 'Apple',
        description: 'Fresh and delicious',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1604783901926-87b8f7c08233',
        quantity: 10,
      },
      {
        id: 2,
        name: 'Banana',
        description: 'Sweet and ripe',
        price: 0.99,
        image: 'https://images.unsplash.com/photo-1528822438211-0dffb0d566ce',
        quantity: 5,
      },
    ],
    vegetables: [
      {
        id: 3,
        name: 'Carrot',
        description: 'Crunchy and healthy',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1592222983279-ea7eef69fb70',
        quantity: 20,
      },
      {
        id: 4,
        name: 'Broccoli',
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

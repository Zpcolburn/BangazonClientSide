// import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

// import { useAuth } from '../utils/context/authContext';

function Home() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getProducts().then(setProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div
      className="d-flex flex-wrap"
    >
      {products.map((product) => (<ProductCard proObj={product} key={product.id} />))}
    </div>
  );
}

export default Home;

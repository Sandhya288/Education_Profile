import { useState } from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data.js';
import './Products.css';

const Products = () => {
  const [showDetailsId, setShowDetailsId] = useState(null);

  const toggleDetails = (productId) => {
    setShowDetailsId(productId === showDetailsId ? null : productId);
  };

  return (
    <main>
      <h1 className='hehe'>Courses:</h1> {/* Heading added here */}
      
      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map((product) => {
            const isDetailsVisible = product.id === showDetailsId;
            return (
              <div className="col-lg-4" key={product.id}>
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className={`card-details ${isDetailsVisible ? 'visible' : 'hidden'}`}>
                      {product.details.slice(0, 2).map((detail, index) => (
                        <div key={index}>{detail}</div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">DETAILS &#8594;</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;

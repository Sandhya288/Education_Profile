import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PRODUCTS from '../data';
import certifiImage from '../images/certifi.png';

const SingleProduct = () => {
  const { productId } = useParams();

  // Get product details based on productId
  const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId));

  const [showCertificateImage, setShowCertificateImage] = useState(false);

  const { name, price, image, details } = singleProduct || {};

  const toggleCertificateImage = () => {
    setShowCertificateImage(!showCertificateImage);
  };

  if (!singleProduct) {
    return <p>Product not found</p>; // Handle the case where the product is not found
  }

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/products">Courses</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt={name} className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>{price}</strong></p>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <br />
            <Link to="/products" className="btn btn-primary btn-sm">BACK</Link> &nbsp;
            <a href="https://forms.gle/Gky4RwmjntzzhPKQ7" className="btn btn-primary btn-sm">REGISTER HERE</a> &nbsp;
            {/* Toggle button for CERTIFICATE */}
            <button className="btn btn-primary btn-sm" onClick={toggleCertificateImage}>
              CERTIFICATE
            </button>
            {/* Conditionally show certificate image */}
            {showCertificateImage && (
              <div className="certificate-image-container">
                <img src={certifiImage} alt="Certificate" className="certificate-image img-fluid" />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;

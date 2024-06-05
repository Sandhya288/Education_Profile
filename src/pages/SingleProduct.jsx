import { Link, useNavigate, useParams } from 'react-router-dom';
import PRODUCTS from '../data.js';

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // Get product details based on productId
  const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId));

  const { name, price, image, details } = singleProduct;

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
                  <li className="breadcrumb-item" ><Link to="/">Home</Link></li>
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
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>{price}</strong></p>
            <ul> {/* Render details as bullet points */}
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            
            <br />
           
            <a href="/products" className="btn btn-primary btn-sm">BACK</a> &nbsp;

            <a href="https://forms.gle/Gky4RwmjntzzhPKQ7" className="btn btn-primary btn-sm">REGISTER HERE</a> &nbsp;
            <a href="/" className="btn btn-primary btn-sm">CERTIFICATE</a> &nbsp;
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;

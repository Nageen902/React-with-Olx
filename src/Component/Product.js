import React, {useContext} from 'react'
import {ProductContext} from './ProductContext';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';



const Products = () => {
    const{products}= useContext(ProductContext);
 return(
    <Container>
    <Row className = "Fresh"> 
      <Col>Fresh Products</Col>
  
 
      <Container>
  <Row>
    <Col>

      <div className="products">
      {products.map((products) => (
        <div className = "product" key={products.id}>
            <div className="product-image">
              <img src ={products.image} alt="not-found"/>
            </div>  
            <div className="product-details">
               <div className="product-name">
                  {products.Name}
                </div>   
                <div className="product-price">
                     {products.Price}
                </div>
                <div className="product-status">
                    {products.status}
                </div>
            </div>      
        </div>
      ))}
          </div>
          </Col>
          </Row>
         </Container>
          </Row>
          </Container>

          
 );
}

export default Products;
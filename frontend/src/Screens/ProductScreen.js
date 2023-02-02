import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";


const ProductScreen = ({ match }) => {
  console.log(match)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data)
    };
    fetchProduct()
  }, [match]);
  
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value= {product.rating} text={`${product.numReviews} reviews `}/>
              </ListGroup.Item>
              <ListGroup.Item>
              Price ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
              Description: {product.description}
              </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Price:
                  </Col>
                  <Col>
                  <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Staus:
                  </Col>
                  <Col>
                  {product.countInStock > 0 ? "In Stock" : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
               <Button className="btn-block" type="button" style={{width:'100%'}} disabled= {product.countInStock === 0}>
                ADD TO CART 
               </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

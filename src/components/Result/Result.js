import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../ProductCard/ProductCard';

function Result({ data, onDelete }) {
  return (
    <Row className='pb-5' xs={1} sm={2} md={3} lg={4}>
      {data &&
        data.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} onDelete={onDelete} />
          </Col>
        ))}
    </Row>
  );
}

export default Result;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import styles from './ProductCard.module.css';

function ProductCard({ product, onDelete }) {
  const { title, filename, packagesize, unitPrice, price, organic, type, id } =
    product;

  const onDeleteHandler = (id) => {
    onDelete(id);
    console.log(id, title);
  };

  return (
    <Card className={`${styles['card-box']}`}>
      <div className={organic ? styles.organic : ''}>
        {organic ? 'Organic' : ''}
      </div>
      <Card.Img
        variant='top'
        src={filename}
        alt={title}
        className={styles.img}
      />
      <Card.Body>
        <h1 className={`${styles.title} mb-3`}>{title}</h1>
        <h2>${price.toFixed(2)}</h2>
        <p>
          {packagesize} | {unitPrice}
        </p>
        <p>
          {type}
          {organic && ' / organic'}{' '}
        </p>

        <Row className='flex-row-reverse'>
          {/* <i
            className={`${styles['edit-btn']} bi bi-pencil-square`}
            role='button'
          /> */}
          <i
            className={`${styles['delete-btn']} bi bi-x-square-fill`}
            role='button'
            onClick={() => onDeleteHandler(id)}
          />
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

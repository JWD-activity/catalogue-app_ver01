import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import styles from './Error.module.css';

function Error({ message }) {
  return (
    <Row className={styles.box}>
      {' '}
      <Alert variant='danger' className={styles.error}>
        <h3>
          <i className={`${styles.icon} bi bi-exclamation-triangle-fill`} />{' '}
          {message}
        </h3>
      </Alert>
    </Row>
  );
}

export default Error;

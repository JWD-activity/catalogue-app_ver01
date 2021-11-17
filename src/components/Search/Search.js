import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styles from './Search.module.css';

export class Search extends Component {
  state = {
    query: '',
  };

  onChangeHandler = (ev) => {
    this.updateQuery(ev.target.value);
  };

  onClearHandler = () => {
    this.updateQuery('');
  };

  updateQuery = (value) => {
    this.setState({ query: value }, () => {
      this.props.searchHandler(this.state.query.toLowerCase().trim());
    });
  };

  render() {
    return (
      <Col md={6} sm={12} className='mb-3'>
        <InputGroup>
          <InputGroup.Text className={styles.inputGroup}>
            <i className={`${styles.search} bi bi-search`} />
          </InputGroup.Text>
          <Form.Control
            className={styles.input}
            type='text'
            placeholder='Search products..'
            aria-label='Search products'
            onChange={this.onChangeHandler}
            value={this.state.query}
            disabled={this.props.isDisabled ? true : false}
          />
          <InputGroup.Text
            className={styles.inputGroup}
            onClick={this.onClearHandler}
          >
            <i className={`${styles.clear} bi bi-x-circle-fill`} />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    );
  }
}

export default Search;

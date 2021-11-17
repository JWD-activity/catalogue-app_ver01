import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import styles from './Filter.module.css';
import Accordion from 'react-bootstrap/Accordion';
import { isAllSelected } from '../../utils/utils';

export class Filter extends Component {
  state = {
    categories: [],
  };

  toggleHandler = (name) => {
    const currentIndex = this.state.categories.indexOf(name);
    const newChecked = [...this.state.categories];

    if (name === 'all')
      this.updateCategory(this.isAll(currentIndex, newChecked));
    else this.updateCategory(this.isNotAll(currentIndex, newChecked, name));
  };

  isAll = (index, selection) => {
    selection.splice(0);

    if (index === -1) selection.push(...isAllSelected(this.props.catalogue));

    return selection;
  };

  isNotAll = (index, selection, name) => {
    if (index === -1) selection.push(name);
    else {
      if (selection.includes('all'))
        selection.splice(this.state.categories.indexOf('all'), 1);
      selection.splice(index, 1);
    }
    return selection;
  };

  updateCategory = (newChecked) => {
    this.setState({ categories: newChecked }, () => {
      this.props.catalogueHandler(this.state.categories);
    });
  };

  generateCheckBox = () => {
    return this.props.catalogue.map((item) => (
      <label key={item.id} className={styles.label}>
        <input
          aria-label={item.name}
          type='checkbox'
          checked={this.state.categories.includes(item.name.toLowerCase())}
          onChange={() => this.toggleHandler(item.name.toLowerCase())}
        />{' '}
        {item.name}
      </label>
    ));
  };

  render() {
    return (
      <Col md={6} sm={12} className='mb-3'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header className={styles.accorHeading}>
              Categories
            </Accordion.Header>
            <Accordion.Body>{this.generateCheckBox()}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    );
  }
}

export default Filter;

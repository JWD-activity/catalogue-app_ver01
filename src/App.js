import Container from 'react-bootstrap/Container';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import Filter from './components/Filter/Filter';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { products } from './data/data';
import { catalogue } from './data/catalogue';
import { searchFilter, categoryFilter, deleteItem } from './utils/utils';
import React, { Component } from 'react';
import './App.css';
import Error from './components/Error/Error';

const initialState = {
  products,
  query: '',
  searchResults: [],
  filterBy: [],
  filterResults: [],
  isEmpty: false,
};

class App extends Component {
  state = initialState;

  searchHandler = (query) => {
    const searchResults = searchFilter(this.state.products, query);
    this.setState({
      query,
      searchResults,
    });
  };

  catalogueHandler = (filterBy) => {
    this.setState({ filterBy }, () => this.filterByHandler());
  };

  filterByHandler = () => {
    const { filterBy, products } = this.state;
    this.setState({ filterResults: categoryFilter(products, filterBy) });
  };

  deleteHandler = (id) => {
    this.setState({
      products: deleteItem(this.state.products, id),
      searchResults: deleteItem(this.state.searchResults, id),
      filterResults: deleteItem(this.state.filterResults, id),
    });
  };

  displaysResults = () => {
    let data;
    let message;
    if (!this.state.query) data = this.state.products;
    if (this.state.query) data = this.state.searchResults;
    if (this.state.filterBy.length !== 0) data = this.state.filterResults;

    if (data.length === 0) {
      if (this.state.products.length === 0) message = 'No Products are added.';
      else message = 'Search results - Sorry No results found.';

      return <Error message={message} />;
    } else return <Result data={data} onDelete={this.deleteHandler} />;
  };

  render() {
    return (
      <Container>
        <header className='d-flex pt-5'>
          <Row className='justify-content-center w-100 my-0 mx-auto'>
            <Search
              searchHandler={this.searchHandler}
              isDisabled={this.state.filterBy.length}
            />

            {!this.state.query && (
              <Filter
                catalogue={catalogue}
                catalogueHandler={this.catalogueHandler}
              />
            )}
            {/* <Col md={2} sm={12}>
              <Button variant='success'>Add Item</Button>
            </Col> */}
          </Row>
        </header>
        <main>
          {this.displaysResults()}
          {/* Form */}
        </main>
        <Footer author='Jinok' />
      </Container>
    );
  }
}

export default App;

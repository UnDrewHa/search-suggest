import React, { Component } from 'react';
import axios from 'axios';

import Heading from './heading.jsx';
import Input from './input.jsx';
import UsersList from './userslist.jsx';

class SearchSuggest extends Component {
  constructor(props) {
    super(props);

    this.onFilter = this.onFilter.bind(this);

    this.state = {
      filterName: '',
      names: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.getActualUsersList(response.data);
      })
      .catch(error => console.log(error));

    this.setState({
      showEmptyBlock: true
    });
  }

  getActualUsersList(names) {
    this.setState({
      names: names
    });
  }

  onFilter(value) {
    this.setState({
      filterName: value
    });
  }

  render() {
    return (
      <nav className="panel">
        <Heading title={this.props.title} />
        <Input filterName={this.state.filterName} onFilter={this.onFilter} />
        <UsersList users={this.state.names} filterName={this.state.filterName} />
      </nav>
    )
  }
}

export default SearchSuggest;
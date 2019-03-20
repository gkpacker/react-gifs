import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { value } = event.target;
    const { search } = this.props;

    search(value);
  }

  render() {
    return (
      <input
        className="form-search form-control"
        type="text"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;

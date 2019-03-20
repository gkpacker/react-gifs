import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const { id } = event.target;
    const { selectGif } = this.props;

    selectGif(id);
  }

  render() {
    const { id, title } = this.props;

    return (
      <img
        src={`https://media3.giphy.com/media/${id}/200.gif`}
        id={id}
        className="gif"
        alt={title}
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;

import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

const GIPHY_API_KEY = 'xj4zFFHzCoxyzvcHk5RccvbBacqyJxlP';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "xT9IgDEI1iZyb2wqo8",
      gifs: []
    };
  }

  selectGif = (id) => {
    this.setState({
      selected: id
    });
  }

  search = (query) => {
    giphy({ https: true, apiKey: GIPHY_API_KEY }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  render() {
    const { gifs, selected } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif
              id={selected}
              key={selected}
              className="gif"
            />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            selectGif={this.selectGif}
            gifs={gifs}
          />
        </div>
      </div>
    );
  }
}

export default App;

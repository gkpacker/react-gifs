import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      { gifs.map(({ id, title }) => <Gif selectGif={selectGif} key={id} id={id} title={title} className="gif" />) }
    </div>
  );
};

export default GifList;

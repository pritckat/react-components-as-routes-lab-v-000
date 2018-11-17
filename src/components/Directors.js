import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) =>
        <div key={index}>
          <h2>{director.name}</h2>
        </div>)}
    </div>
  );
}

export default Directors

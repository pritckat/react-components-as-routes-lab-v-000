import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
        </div>
      ))}
    </div>
  );
};

export default Actors;

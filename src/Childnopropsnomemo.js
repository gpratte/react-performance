import React from 'react';
import {getTime} from "./utils";

function Childnopropsnomemo() {
  console.log('rendering Childnopropsnomemo')
  return (
    <div>
      <h3>{getTime()} No props no memo</h3>
    </div>
  );
};

export default Childnopropsnomemo;

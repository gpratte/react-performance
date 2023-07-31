import React from 'react';
import {getTime} from "./utils";

function Childfunctionpropnomemo({logTime}) {
  console.log('rendering Childfunctionpropnomemo')
  logTime('Childfunctionpropnomemo');
  return (
    <div>
      <h3>{getTime()}  Function prop no memo</h3>
    </div>
  );
};

export default Childfunctionpropnomemo;

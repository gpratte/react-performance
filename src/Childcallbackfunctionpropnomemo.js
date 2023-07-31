import React from 'react';
import {getTime} from "./utils";

function Childcallbackfunctionpropnomemo({logTime2}) {
  console.log('rendering Childcallbackfunctionpropnomemo')
  logTime2('Childcallbackfunctionpropnomemo');
  return (
    <div>
      <h3>{getTime()}  Callback function prop no memo</h3>
    </div>
  );
};

export default Childcallbackfunctionpropnomemo;

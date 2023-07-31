import React, {memo} from 'react';
import {getTime} from "./utils";

const Childfunctionpropwithmemo = memo(function childfunctionpropwithmemo({logTime}) {
  console.log('rendering Childfunctionpropwithmemo')
  logTime('Childfunctionpropwithmemo');
  return (
    <div>
      <h3>{getTime()}  Function prop with memo</h3>
    </div>
  );
});

export default Childfunctionpropwithmemo;

import React, {memo} from 'react';
import {getTime} from "./utils";

const Childcallbackfunctionpropwithmemo = memo(function childcallbackfunctionpropwithmemo({logTime2}) {
  console.log('rendering Childcallbackfunctionpropwithmemo')
  logTime2('Childcallbackfunctionpropwithmemo');
  return (
    <div>
      <h3>{getTime()}  Callback function prop with memo</h3>
    </div>
  );
});

export default Childcallbackfunctionpropwithmemo

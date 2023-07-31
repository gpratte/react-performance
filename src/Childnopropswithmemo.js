import React, {memo} from 'react';
import {getTime} from "./utils";

const Childnopropswithmemo = memo(function childnopropswithmemo() {
  console.log('rendering Childnopropswithmemo')
  return (
    <div>
      <h3>{getTime()}  No props with memo</h3>
    </div>
  );
});

export default Childnopropswithmemo;

import React, {memo} from 'react';
import {getTime} from "./utils";

const Childnamepropwithmemo = memo(function childnamepropwithmemo({name}) {
  console.log('rendering Childnamepropwithmemo')
  return (
    <div>
      <h3>{getTime()}  Name prop with memo. Name is {name}</h3>
    </div>
  );
});

export default Childnamepropwithmemo;

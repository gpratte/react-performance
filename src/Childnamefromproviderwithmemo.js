import React, {memo} from 'react';
import {getTime} from "./utils";
import {useParentContext} from "./ParentIsContextProvider";

const Childnamefromproviderwithmemo = memo(function Childnamefromproviderwithmemo() {
  console.log('rendering Childnamefromproviderwithmemo')
  const {name} = useParentContext();

  return (
    <div>
      <h3>{getTime()}  Name from provider with memo. Name is {name}</h3>
    </div>
  );
});

export default Childnamefromproviderwithmemo

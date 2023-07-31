import React from 'react';
import {getTime} from "./utils";
import {useParentContext} from "./ParentIsContextProvider";

export default function Childnamefromprovidernomemo() {
  console.log('rendering Childnamefromprovidernomemo')
  const {name} = useParentContext();

  return (
    <div>
      <h3>{getTime()}  Name from provider no memo. Name is {name}</h3>
    </div>
  );
};

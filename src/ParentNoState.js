import React from 'react';
import Mymodal2 from "./Mymodal2";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";

function ParentNoState() {

  const name = 'Static Name';

  return (
    <>
      {console.log('rendering ParentNoState')}
      <h1>No State</h1>
      <Childnopropsnomemo/>
      <Childnopropswithmemo/>
      <Childnamepropnomemo name={name}/>
      <Childnamepropwithmemo name={name}/>

      <Mymodal2 />
    </>
  );
}

export default ParentNoState
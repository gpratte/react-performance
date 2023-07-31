import React from 'react';
import Button from 'react-bootstrap/Button';
import Mymodal2 from "./Mymodal2";
import One from "./One";
import Two from "./Two";

function Home2() {

  console.log('rendering home2')

  return (
    <>
      <h1>Home2</h1>
      <One/>
      <Two/>

      <Mymodal2 />
    </>
  );
}

export default Home2
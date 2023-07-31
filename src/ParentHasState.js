import Mymodal from "./Mymodal";
import React, {useCallback, useState} from "react";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";
import Childfunctionpropnomemo from "./Childfunctionpropnomemo";
import Childfunctionpropwithmemo from "./Childfunctionpropwithmemo";
import Childcallbackfunctionpropnomemo from "./Childcallbackfunctionpropnomemo";
import Childcallbackfunctionpropwithmemo from "./Childcallbackfunctionpropwithmemo";

function ParentHasState() {

  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');

  const logTime = (from) => console.log('In logTime, from ' + from + ' ' + Date.now());

  // hook to memorize the function
  const logTime2 = useCallback(
    (from) => {
      console.log('In LogTime2, from ' + from + ' ' + Date.now())    },
    [],
  );

  return (
    <>
      {console.log('rendering ParentHasState')}
      <h1>Has State</h1>
      {/* The following have no memo so they always render when this parent renders*/}
      <Childnopropsnomemo/>
      <Childnamepropnomemo name={name}/>
      <Childfunctionpropnomemo logTime={logTime}/>
      <Childcallbackfunctionpropnomemo logTime2={logTime2}/>

      <br/>

      {/* Memoed child does not rerender when this parent rerenders because
          there are no props and hence they have not changed have not changed */}
      <Childnopropswithmemo/>

      {/* Memoed child does not rerender when this parent rerenders
          unless the name prop changed */}
      <Childnamepropwithmemo name={name}/>

      {/* Does render even though the child is memoed because the reference
          to the function passed in props is always different  */}
      <Childfunctionpropwithmemo logTime={logTime}/>

      {/* Memoed child does not render when this parent renders because the
          reference to the function passed in props is memoed by useCallback */}
      <Childcallbackfunctionpropwithmemo logTime2={logTime2}/>

      <Mymodal showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </>
  );
}

export default ParentHasState;

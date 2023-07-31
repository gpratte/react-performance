import Mymodal from "./Mymodal";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";
import Childfunctionpropnomemo from "./Childfunctionpropnomemo";
import Childfunctionpropwithmemo from "./Childfunctionpropwithmemo";
import Childcallbackfunctionpropnomemo from "./Childcallbackfunctionpropnomemo";
import Childcallbackfunctionpropwithmemo from "./Childcallbackfunctionpropwithmemo";

import useCustomHook from "./useCustomHook";

export default function ParentHasCustomHook() {

  const {
    showModel,
    setShowModel,
    name,
    setName,
    logTime,
    logTime2
  } = useCustomHook();

  return (
    <>
      {console.log('rendering ParentHasCustomHook')}
      <h1>Has Custom Hook</h1>
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

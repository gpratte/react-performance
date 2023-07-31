import React, {createContext, useContext, useState} from "react";
import Childnamefromprovidernomemo from "./Childnamefromprovidernomemo";
import {getTime} from "./utils";
import Mymodal from "./Mymodal";
import Childnamefromproviderwithmemo from "./Childnamefromproviderwithmemo";

const ParentContext = createContext({});
export const useParentContext = () => useContext(ParentContext);

export default function ParentIsContextProvider() {

  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name ' + getTime());

  return (
    <ParentContext.Provider value={{name}}>
      {console.log('rendering ParentIsContextProvider')}
      <h1>Is Context Provider</h1>
      {/* No memo so it always render when this parent renders*/}
      <Childnamefromprovidernomemo/>
      {/* Will rerender because of the useContext hook even though is uses memo
          https://legacy.reactjs.org/docs/hooks-reference.html#usecontext */}
      <Childnamefromproviderwithmemo/>
      <Mymodal showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </ParentContext.Provider>
  );
}

import {useCallback, useState} from "react";

export default function useCustomHook() {
  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');
  const logTime = (from) => console.log('In logTime, from ' + from + ' ' + Date.now());
  const logTime2 = useCallback(
    (from) => {
      console.log('In LogTime2, from ' + from + ' ' + Date.now())    },
    [],
  );
  return {
    showModel,
    setShowModel,
    name,
    setName,
    logTime,
    logTime2
  }
}

import { ref, onValue, off } from "firebase/database";
import { database } from "./firebase";
import { useEffect, useState } from "react";

export const useGetData = (endpoint) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const refData = ref(database, endpoint);
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    return () => {
      off(refData);
    };
  }, [endpoint]);

  return data;
};

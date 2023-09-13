import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const [reload, setReload] = useState(false);
  const [members , setMembers] = useState([])
  


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
      console.log(response.data);
    };
    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        id: uuidv4(),
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    if (response.status === 200) {
      console.log("ok");
      setReload(!reload);
    } else {
      console.log("not ok");
    }
  };

  const Del = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    if (response.status === 200 && response.data) {
      console.log("del ok");
      setReload(!reload);
    }
  };



  return (
    <CartContext.Provider value={{members, setMembers, reload, setReload,createData,Del}}>
      {children}
    </CartContext.Provider>
  );
}

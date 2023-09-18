import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const CartContext = createContext({});


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
  
]


export function CartContextProvider({ children }) {

  const [reload, setReload] = useState(false);
  const [members , setMembers] = useState(mockEmployees)
  


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers((prevdata) => {
        return [...response.data, ...prevdata];
      });
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
      alert("Create : Create success");
      setReload(!reload);
    } else {
      alert("Create : Create failed");
    }
  };


  const Del = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsd5-mock-backend.onrender.com/member/${id}`
      );
      if (response.status === 200 && response.data) {
        alert("Delete : Delete success");
        setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
      } else {
        alert("Delete : Delete failed");
        setReload(!reload);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };



  return (
    <CartContext.Provider value={{members, setMembers, reload, setReload,createData,Del}}>
      {children}
    </CartContext.Provider>
  );
}

import { useState, useEffect } from "react";
import Homenormal from "./Homenormal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { CartContext } from "./context";

const Homeadmin = () => {


  const { members, createData , Del } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleCreateData = async () => {
    await createData(name, lastname, position);
    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <div className="p-6">
      <Homenormal />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="position"
              value={position}
              onChange={(ev) => setPosition(ev.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <button
              onClick={handleCreateData}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <table className="mt-4 w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Last Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>

        {members.map((member) => (
          <tbody>
            <tr key={member.id}>
              <td className="py-2 px-4">{member.name}</td>
              <td className="py-2 px-4">{member.lastname}</td>
              <td className="py-2 px-4">{member.position}</td>
              <td className="py-2 px-4">
                <button className="mx-5" onClick={() => Del(member.id)}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Homeadmin;

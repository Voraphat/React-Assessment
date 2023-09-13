import Homenormal from "./Homenormal";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./context";

const Homeuser = () => {
  // const [members, setMembers] = useState([]);

  const { members } = useContext(CartContext);

  return (
    <div className="p-6">
      <Homenormal />

      <table className="mt-4 w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Last Name</th>
            <th className="py-2 px-4">Position</th>
          </tr>
        </thead>

        {members.map((member) => (
          <tbody>
            <tr key={member.id}>
              <td className="py-2 px-4">{member.name}</td>
              <td className="py-2 px-4">{member.lastname}</td>
              <td className="py-2 px-4">{member.position}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Homeuser;

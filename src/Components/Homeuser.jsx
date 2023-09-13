import Homenormal from "./Homenormal";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./context";
import Button from "./Button";
import Layout from "./Layout";

const Homeuser = () => {
  // const [members, setMembers] = useState([]);

  const { members } = useContext(CartContext);

  return (
    <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-semibold">
        Generation Thailand <br /> Home - User Sector
      </h1>
      <Button/>
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
    </Layout>
  );
};

export default Homeuser;

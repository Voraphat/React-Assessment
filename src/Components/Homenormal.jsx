import Layout from "./Layout";
import { Link } from 'react-router-dom';

const Homenormal = () => {
  return (
    <Layout>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Generation Thailand <br /> React - Assessment
          </h1>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link to='/Homeuser'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              User Home Sector
            </button>
          </Link>

          <Link to='/Homeadmin'>
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
              Admin Home Sector
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Homenormal;

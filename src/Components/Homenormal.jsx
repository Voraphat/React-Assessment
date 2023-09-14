import Button from "./Button";
import Layout from "./Layout";


const Homenormal = ({data}) => {
  
  return (
    <Layout>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Generation Thailand <br /> React - Assessment
          </h1>
        </div>

        <div className="mt-8 flex justify-center space-x-4">

          <Button data={data} />
          
        </div>
      </div>
    </Layout>
  );
};

export default Homenormal;

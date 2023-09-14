import Layout from "./Layout";

const Owner = () => {
  return (
    <Layout>
      <div className=" p-4 bg-gray-100">
        <div>
          <h2 className="text-3xl font-bold mb-4">Bank - Group I - 60</h2>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHjoAoCXwzWDsE1MDo8UKO9ibzC9X-16njg&usqp=CAU"
          alt=""
          className="w-64 h-64 shadow-md mx-auto my-10"
        />

        <div className="w-[50%] mx-auto ">
          <p className="text-base">
            <span className="font-bold">Short bio :</span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos illo numquam, velit adipisci
            possimus modi totam, facilis id voluptatem doloribus fugiat autem
            magnam vel? Aliquam nisi corporis quam labore? Nemo.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Owner;

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-end  items-center">
        <div className="text-white text-xl font-bold">
          <Link to='/'>Home</Link>
        </div>

        <div className="text-white text-xl font-bold px-3">
          <Link to='/owner'>Owner</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

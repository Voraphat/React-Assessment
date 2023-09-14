import { Link } from 'react-router-dom'


const Button = () => {

  return (
    <div >

      <Link to='/Homeuser'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mx-5">
              User Home Sector
            </button>
          </Link>

          <Link to='/Homeadmin'>
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
              Admin Home Sector
            </button>
          </Link>

    </div>
  )
}

export default Button

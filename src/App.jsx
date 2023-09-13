import './App.css'
import Homenormal from './Components/Homenormal'

function App() {
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
  return (
    <>
      <Homenormal data={mockEmployees}/>
    </>
  )
}

export default App

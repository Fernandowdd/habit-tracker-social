import './App.css'
import Navbar from './components/navbar.jsx'


function App() {
  //Obejtos de usuario ejemplificado
  const user ={
    name: "SwankGosling696",
    avatar: ""
  };
  return (
    <>
      <Navbar UserName = {user.name} ProfilePicture = {user.avatar} />
    </>
  )
}

export default App

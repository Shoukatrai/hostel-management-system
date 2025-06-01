import { Link, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path='/' element={<Home />  } />   
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App

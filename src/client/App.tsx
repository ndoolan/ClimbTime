import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
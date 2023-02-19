import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'
import NewTicket from './pages/NewTicket'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/new-item' element={<PrivateRoute />}>
              <Route path='/new-item' element={<NewTicket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App

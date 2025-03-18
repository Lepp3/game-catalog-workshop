import Header from './components/header-component/Header'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router'
import Login from './components/login/Login'
import Register from './components/register/Register'
import './App.css'

function App() {


  return (
    <div id="box">
       <Header/>
       <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>
        
        </main>
    </div>
  )
}

export default App

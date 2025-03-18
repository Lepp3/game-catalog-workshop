import Header from './components/header-component/Header'
import Home from './components/home/Home'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {


  return (
    <div id="box">
       <Header/>
       <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        
        </main>
    </div>
  )
}

export default App

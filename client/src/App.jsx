import Header from './components/header-component/Header'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router'
import { UserContext } from './contexts/UserContext'
import Login from './components/login/Login'
import Register from './components/register/Register'
import './App.css'
import { GameCatalog } from './components/catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import { useState } from 'react'
import Logout from './components/logout/Logout'

function App() {

  const [authData,setAuthData] = useState({});

  const userLoginHandler = (resultData) =>{
    setAuthData(resultData)
    
  }

  const userLogoutHandler = () =>{
    setAuthData({});
  }

  return (
    <UserContext.Provider value={{...authData,userLoginHandler,userLogoutHandler}}>
    <div id="box">
       <Header/>
       <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/games' element={<GameCatalog/>}/>
          <Route path='/games/:gameId/details' element={<GameDetails />}/>
          <Route path='/games/:gameId/edit' element={<GameEdit/>}/>
          <Route path='/games/create' element={<GameCreate/>}/>
          <Route path='/logout' element={<Logout/>} />

        </Routes>
        
        </main>
    </div>
    </UserContext.Provider>
  )
}

export default App

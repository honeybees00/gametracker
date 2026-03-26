import './App.css'
import React from 'react'
import {BrowserRouter,Route} from 'react-router'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {Addgamepage} from './pages/Addgamepage'
import {GameCard} from './components/GameCard'

function App(){
    <BrowserRouter>
    <Navbar>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Addgamepage/>}/>
    

</Routes>


    </Navbar>
    
    
    </BrowserRouter>
}



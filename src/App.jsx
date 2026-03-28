import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import { AddGamePage } from './pages/AddGamePage'
import GameCard from './components/GameCard'

function App(){
    return(
    <BrowserRouter>
    <Navbar/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<AddGamePage/>}/>
    
    

</Routes>


    
    
    
    </BrowserRouter>
    )
}
export default App


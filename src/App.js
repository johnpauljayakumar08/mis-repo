import './App.css';
import { Login } from './Components/Login/Login';
import { Dashboard } from './Components/Dashboard/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Menu } from './Components/menu/menu';
import { Spcourse } from './Components/cousurse/course';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Dashboard' element={[<Menu/>,<Dashboard/>]}/>
          <Route path='/SP' element={[<Menu/>,<Spcourse/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

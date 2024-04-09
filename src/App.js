import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import UserContext from './Components/UserContext';

function App() {
  return (
    
       <UserContext>
        <div className='app'>
        <Home/>
    </div>
       </UserContext>

      
  );
}

export default App;

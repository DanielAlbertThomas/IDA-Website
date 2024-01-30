import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

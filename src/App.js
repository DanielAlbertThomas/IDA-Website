import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import Page from './routes/Page'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Page" element={<Page/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

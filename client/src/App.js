import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from  './pages/home';
import Details from './pages/details'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Home />} />
    <Route path="/:id" element={<Details />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;

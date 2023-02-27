import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Movie from './components/Movie';
import Detail from './routes/Detail';
import Home from './routes/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

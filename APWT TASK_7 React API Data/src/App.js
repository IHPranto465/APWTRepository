import logo from './logo.svg';
import Nav from './Component.js/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Component.js/Home';
import Layout from './Component.js/Layout';
import Profile from './Component.js/Profile';
import Users from './Component.js/Users';
import Details from './Component.js/Details';
function App() {
  return (
    <div className="App">
      <Router>
      <Layout />
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/user' element={<Users />} />
        <Route exact path='/details:id' element={<Details />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Details from './Component/Details';
import Layout from './Component/Layout';
import Nav from './Component/Nav';
import Profile from './Component/Profile';
import Users from './Component/Users';
import Logout from './Component/logout';
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
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;

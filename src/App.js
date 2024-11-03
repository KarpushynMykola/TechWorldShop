import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Main from './Main';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

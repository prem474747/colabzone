
// import Register from './components/Register';
// import Login from './components/Login';
import Landing from './components/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Landing}></Route>
           {/* <Route path='/login' Component={Login} /> */}
          {/* <Route path='/signup' exact Component={Register} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

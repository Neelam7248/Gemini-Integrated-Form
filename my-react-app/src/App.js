import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import GeminiForm from './components/GeminiForm';
function App() {
  return (
  
    <div>
<Router>
<Link to="/">GeminiForm</Link>
<Routes>
  <Route path="/"element={<GeminiForm/>}/>
</Routes>
</Router>
      </div>
  );
}

export default App;

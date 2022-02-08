import './App.css';
import Listed from './components/Listed';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink, Switch } from 'react-router-dom';
import Show from './components/Show';



function App() {


  return (
    <div>
      <Router>
        <Listed />
        
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/main-styles.css'
import NavBar from './Organisms/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
//import Video from './Pages/Video';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={ Home}/>
        {/* <Route path='/materias/:name/:id' component={ Video } /> */}
        <Route path='/materias/:course'component={ Course } /> 
        <Route path='/materias' component={ Courses } />
        
        <Route component={() => (
                  <div>
                      <h1>Error 404</h1>
                      <span>Pagina no Encontrada</span>
                  </div>
          )} />
      </Switch>
    </Router>
  );
}

export default App;

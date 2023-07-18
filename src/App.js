import NavigationBar from './navigation';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs';
import Create from './Create';


function App() {
  return (
    <Router>
    <div className="App text-center">
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/AboutUs">
          <AboutUs/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

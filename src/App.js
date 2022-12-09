import './App.css';
import Projects from './components/projects/Projects'
import Tasks from './components/tasks/Tasks'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename="/">
      <Switch >
        <Route path="/" component={Projects} exact/>
        <Route path="/tasks/:id" component={Tasks} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

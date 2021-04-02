import React from 'react'
import PageOne from './components/PageOne'
import './App.css'
import PageInsert from './components/PageInsert'
import Button from './components/Button'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TextPage from './components/Textpage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
      <div className="back">
        <Button/>
        <PageInsert />
        <PageOne />
      </div>
        </Route>
        <Route path='/TextPage' component={TextPage} />
      </Switch>
    </Router>
    );
}

export default App;

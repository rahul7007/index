import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Transaction from '../pages/Home'
import About from '../pages/About'
import Login from '../components/Login'

function App() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/about" exact component={Skeliton} /> */}
                <Route path="/" exact component={About} />
                <Route path="/login" exact component={Login} />
                {/* <Route path="/t" exact component={Transaction} /> */}
            </Switch>
        </Router>
    )
}

export default App
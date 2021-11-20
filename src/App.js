import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'

import routes from './routes'

function App() {
  return (
    <div id='App'>
        <NavBar />

        <Router>
            <Switch>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        exact
                        component={route.component}
                    />
                ))}
                {/* <Route component={NotFound} /> */}
            </Switch>

        </Router>

        <Footer />
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import App from './App'
import Hackathon from './Hackathon'

// Fonts
import 'typeface-roboto'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/hackathon" component={Hackathon} />
    </div>
  </Router>, document.getElementById('root'))
registerServiceWorker()

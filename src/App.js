import React from 'react';
import {HashRouter as Router,Route,Redirect} from 'react-router-dom' 
// import Index from './views/Index.js'
// import Page404 from './views/error/404.js'
import loadable from './utils/loadable.js'
import 'antd/dist/antd.css'


let Layout =loadable(()=>import('./views/Layout.js'))
let Page404 = loadable(()=> import('./views/error/404.js'))


function App() {
  return (
    <Router>
       <Route exact  path="/"   render={()=>(
            <Redirect to="/index"/>
       )} />
       <Route component={Layout} />
       <Route exact path="/404" component ={Page404}/>
    </Router>
  );
}

export default App;

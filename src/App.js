import Admin from './Components/Admin';
import FieldStuffs from './Components/FieldStuffs'
import Beneficiaries from './Components/Beneficiaries'
import Programs from './Components/Program'
import Dashboard  from './Components/Dashboard';

import {BrowserRouter,Routers, Route} from "react-router-dom"


//import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Admin />
        </BrowserRouter>


        {/* <Switch>
        <Route exact from = "/" render = {props => <Dashboard{...props}/>}/>
        <Route exact path = "/Beneficiaries" render = {props => <Beneficiaries{...props}/>}/>
        <Route exact path = "/Programs" render = {props => <Programs{...props}/>}/>
        <Route exact path = "/FieldStuffs" render = {props => <FieldStuffs{...props}/>}/>


        </Switch>
       */}
        
        

    </div>
  )
}

export default App;

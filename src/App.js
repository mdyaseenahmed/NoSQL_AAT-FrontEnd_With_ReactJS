import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import ListData from "./Components/listData";
import Analytics from "./Components/analytics";
import UpdateRec from "./Components/updateRecord";
import CreateRec from "./Components/createRecord";

function App() {
  return (
    < > 
        <Switch>
            <Route path='/' exact component={Home} />  
            <Route path='/createRec' exact component={CreateRec} />  
            <Route path='/updateRec/:docId' exact component={UpdateRec} />  
            <Route path='/analytics' exact component={Analytics} />  
            <Route path='/listData' exact component={ListData} />   
        </Switch>      
    </>
);
}

export default App;

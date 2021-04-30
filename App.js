
import './App.css';
import Sigup from './Signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loginpage from './Loginpage';
import TodoMain from './TodoMain';
import Search from './Search';
import BirthForm1 from './BirthForm1';
import BirthForm2 from './BirthForm2';
import BirthForm3 from './BirthForm3';




function App() {

  
  return (
    <div className="App">
      <>
      
        <BrowserRouter>
        <Switch>
          <Route path='/login' component={Loginpage}/>
          <Route path='/signup' component={Sigup}/>
          <Route path='/todomain' component={TodoMain}/>
          <Route path='/search'  component={Search} />
          <Route path='/birth1'  component={BirthForm1} />
          <Route path='/birth2'  component={BirthForm2} />
          <Route path='/birth3'  component={BirthForm3} />

        </Switch>
        </BrowserRouter>   

      </>
    </div>
  );
}

export default App;

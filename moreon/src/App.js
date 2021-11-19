import './App.css';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Crud from './components/Crud';
import Modeldata from './components/Modeldata';



function App() {
  return (
    <>
      {/* <Crud />
      <Modeldata/> */}
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Crud} />
          <Route exact path="/modeldata" component={Modeldata}/>
        </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;

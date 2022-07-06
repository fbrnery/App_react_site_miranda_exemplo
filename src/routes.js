import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './componentes/Header';
import Main from './views/Main';
import Contatos from './views/Contatos';
import Formacao from './views/Formacao';
import Portifolio from './views/Portifolio';
import Section from './componentes/Section';
import Footer from './componentes/Footer';


const Routes = () => {
    return(
      <BrowserRouter>
       <Header/>
        <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/main" component={Main} />
                <Route path="/contatos" component={Contatos} />
                <Route path="/formacao" component={Formacao} />
                <Route path="/portifolio" component={Portifolio} />
        </Switch>
        <Section/>
        <Footer/>
      </BrowserRouter>
    )
  }
  
  export default Routes;
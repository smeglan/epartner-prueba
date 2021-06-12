import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from './shared/components/header/header';
import { Home } from './screens/home/home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Footer } from './shared/components/footer/footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

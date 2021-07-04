import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Store from "./pages/Store";
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
        <Route path="/images" component={Images} />
        <Route path="/gmail" component={Gmail} />
      </Switch>
    </>
  );
}

export default App;

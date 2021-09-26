import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  // debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main">
        <div className="main__navbar">
          <Navbar store={props.store} />
        </div>
        <div className="main__content">
          <Route exact path={"/"}
            render={() => <Profile store={props.store} />}
          />

          <Route path={'/dialogs'}
            render={() => <DialogsContainer store={props.store} />}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  // debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main">
        <div className="main__navbar">
          <Navbar />
        </div>
        <div className="main__content">
          <Route exact path={"/"}
            render={() => <Profile
              stateProfilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />

          <Route path={'/dialogs'}
            render={() => <Dialogs
              stateDialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
            />} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
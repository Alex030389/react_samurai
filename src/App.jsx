import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  // debugger;

  return (
    <div className="app-wrapper">
      <Header/>
      <main className="main">
        <div className="main__navbar">
          <Navbar/>
        </div>
        <div className="main__content">
          <Route exact path={"/"} render={() => <Profile/>}/>
          <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
          <Route path={'/users'} render={() => <UsersContainer/>}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PublicFolderImages from "./containers/PublicFolderImages/PublicFolderImages";
import SrcFolderImages from "./containers/SrcFolderImages/SrcFolderImages";
import SrcFolderJSONImages from "./containers/SrcFolderJSONImages/SrcFolderJSONImages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/public" component={PublicFolderImages} />
          <Route exact path="/src" component={SrcFolderImages} />
          <Route exact path="/src-require" component={SrcFolderJSONImages} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

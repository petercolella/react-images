import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PublicFolderImages from "./containers/PublicFolderImages/PublicFolderImages";
import SrcFolderImages from "./containers/SrcFolderImages/SrcFolderImages";
import SrcFolderRequireImages from "./containers/SrcFolderRequireImages/SrcFolderRequireImages";

function App() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/public"} component={PublicFolderImages} />
          <Route exact path={"/src"} component={SrcFolderImages} />
          <Route
            exact
            path={"/src-require"}
            component={SrcFolderRequireImages}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

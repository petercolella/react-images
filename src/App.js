import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import PublicFolderImage from "./containers/PublicFolderImage/PublicFolderImage";
import SrcFolderImage from "./containers/SrcFolderImage/SrcFolderImage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/public"} component={PublicFolderImage} />
        <Route exact path={"/src"} component={SrcFolderImage} />
      </Switch>
    </Router>
  );
}

export default App;

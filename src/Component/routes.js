import App from "../App";
import Login from "./Container/Login";
// import Contact from "./Contact";
import Home from "./Home";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* <IndexRoute component={Home} /> */}
      <Route path="Login" component={Login} />
    </Route>
  </Router>,
  document.getElementById("root")
);

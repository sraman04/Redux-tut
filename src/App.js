import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Home from "./containers/HomeConatiner";
function App() {
  return (
    <div className="App">
      {/* //Props 
      <h1>App Component</h1>
      <User data={{ name: "aman" }} /> */}

      <Home />
    </div>
  );
}

export default App;

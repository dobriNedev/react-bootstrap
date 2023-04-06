import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/Navbar/Navbar";
import PostProvider from "./contexts/postsContext";
import Routing from "./components/Routing/Routing";

function App() {
  return (
    <PostProvider>
      <div className="App">
        <MyNavbar />
        <Routing />
      </div>
    </PostProvider>
  );
}

export default App;

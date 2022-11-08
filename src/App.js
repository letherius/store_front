import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <h1>Hello React !!!</h1>
      <Footer> </Footer>
    </div>
  );
}

export default App;

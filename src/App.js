import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="app-header">
                <Header></Header>
            </div>
            <div>
                <Main></Main>
            </div>
        </div>
    );
}

export default App;

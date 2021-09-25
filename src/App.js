import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <div>
            <div className="app-header">
                <Header></Header>
            </div>
            <div className="bg-light">
                <Main></Main>
            </div>
        </div>
    );
}

export default App;

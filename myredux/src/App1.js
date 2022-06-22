import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreScreen from "./components/ScoreScreen";
import Total from "./components/Total";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Scores from "./components/Scores";

function App() {
  return (
    <>
    <Router>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
        <Route path="/" key= {1} element={[<ScoreScreen />,<Total/>]}  />
        <Route path="/signin" key= {2} element={<Signin/>}  />
        <Route path="/register" key= {3} element={<Register/>}  />
        <Route path="/scores" key= {2} element={<Scores/>}  />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      </Router>
    </>
  );
}

export default App;
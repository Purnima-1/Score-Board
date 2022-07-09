import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreScreen from "./components/ScoreScreen";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Scores from "./components/Scores";
import Chart from "./components/Chart";

function App() {
  return (
    <>
    <Router>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
        <Route path="/" key= '{1}' element={[<ScoreScreen />]}  />
        <Route path="/signin" key= '{2}' element={<Signin/>}  />
        <Route path="/register" key= '{3}' element={<Register/>}  />
        <Route path="/scores" key= '{4}' element={<Scores/>}  />
        <Route path="/chart" key= '{5}' element={<Chart/>}  />
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

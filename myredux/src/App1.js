import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreScreen from "./components/ScoreScreen";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Scores from "./components/Scores";
import Chart from "./components/Chart";
import Guest from "./components/Guest"
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.loginSlice);
 
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" key="1" element={token?<ScoreScreen />: <Guest/>} />
            <Route path="/signin" key="2" element={<Signin />} />
            <Route path="/register" key="3" element={<Register />} />
            <Route path="/scores" key="4" element={token?<Scores />: <Guest/>} />
            <Route path="/chart" key="5" element={token?<Chart />: <Guest/>} />
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

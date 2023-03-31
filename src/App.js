import "./App.css";
import Signincomp from "./Components/Signincomp";
import HomePage from "./HomePage";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Components/Page7";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signincomp" element={<Signincomp />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          <Route path="/Page6" element={<Page6 />}  />
          <Route path="/Page7" element={<Page7 />}  />
                                </>
      </Routes>
    </div>
  );
}

export default App;

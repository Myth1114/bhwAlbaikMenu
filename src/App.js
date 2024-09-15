import "./App.css";
import Menu from "./Menu/Menu";
import FifthPage from "./Pages/FifthPage";
import FourthPage from "./Pages/FourthPage";
import SecondPage from "./Pages/SecondPage";

import ThirdPage from "./Pages/ThirdPage";

import SixthPage from "./Pages/SixthPage";
function App() {
  return (
    <div className="Main">
      <Menu />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </div>
  );
}

export default App;

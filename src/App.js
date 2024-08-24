import "./App.css";
import Menu from "./Menu/Menu";
import FifthPage from "./Pages/FifthPage";
import FourthPage from "./Pages/FourthPage";
import SecondPage from "./Pages/SecondPage";

import ThirdPage from "./Pages/ThirdPage";

function App() {
  return (
    <div className="Main">
      <Menu />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </div>
  );
}

export default App;

import "./App.css";
import Stepper from "./components/shared/Stepper";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello Eden</h1>
      <br />
      <Stepper isActive={true} step={4} />
    </div>
  );
}

export default App;

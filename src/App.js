import "./App.css";
import Card from "./components/shared/Card";
import eden from "./assets/eden.png";
import enrolmentInfoArray from "./data/enrolmentData";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello Eden</h1>
      <br />
      <Card
        img={eden}
        text={[
          enrolmentInfoArray[3].controlOne.label,
          enrolmentInfoArray[3].controlOne.placeholder,
        ]}
      />
    </div>
  );
}

export default App;

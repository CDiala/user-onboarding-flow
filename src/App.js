import "./App.css";
import Input from "./components/shared/Input";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello Eden</h1>
      <br />
      <Input inputPlaceholder={"Eden"} title="Workspace Name" />
      <br />
      <Input
        inputPlaceholder={"test placeholder"}
        readOnlyPlaceholder={"http://"}
        readOnly={true}
        isOptional={true}
        title="Workspace URL"
      />
    </div>
  );
}

export default App;

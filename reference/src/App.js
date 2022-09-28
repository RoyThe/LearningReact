import Heading from "./Heading";
import Greeting from "./Greeting";

const customStyle = {color: "blue"}

function App() { 
  return (
    <div>
      <h1 style= {customStyle}>Hello World</h1>
      <Greeting />
      <Heading /> 
      <button className = "button button1" type="button">Click Me!</button>
    </div>
  );
}



export default App;

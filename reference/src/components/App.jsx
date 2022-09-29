import Heading from "./Heading";
import Greeting from "./Greeting";
import NavBar from "C://Users//Owner//Documents//GitHub//LearningReact//reference//src/Navigation/Navbar.js"
import "bootstrap/dist/css/bootstrap.min.css";
const customStyle = {color: "blue"}

function App() { 
  return (
    <div>
      <NavBar />
      <h1 style= {customStyle}>Equinox Certified Professional Personal Trainer</h1>
      <Greeting /> 
      <button className = "button button1" type="button">Click Me!</button>
      
    </div>
  );
}



export default App;

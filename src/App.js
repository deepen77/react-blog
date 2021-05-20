import Topbar from "./components/topbar/TopBar";
import { BrowserRouter as Router,} from "react-router-dom";
import Homepage from "./pages/home/Home";


function App() {
  return (
    
    <Router>
      <Topbar />
      <Homepage/>
    </Router>
  
  );
}

export default App;

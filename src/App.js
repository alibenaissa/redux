import './App.css';

import { Tasklist } from "./components/Tasklist";
import Addtask from './components/Addtask';
function App() {


  
  return (
    <div className="App">

<h1> Todo app</h1>
<Tasklist/>
<Addtask/>
    </div>
  );
}

export default App;

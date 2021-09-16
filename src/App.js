import logo from './logo.svg';
import './App.css';
import { bowlingPins } from './codewars/6kyu/bowlingPins';

function App() {
  bowlingPins([1,2,5,10]);

  return (
    <div className="App">
      <h1>CodeWars Sandbox</h1>
    </div>
  );
}

export default App;

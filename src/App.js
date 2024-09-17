import logo from './logo.svg';
import './App.css';

function App() {
  const variable = true;
  return (
  <div className="main">
     <h1> Learning React</h1>
     <div>hello world!</div>
     <br/> 
     
     {variable && <p>true</p>}
    
  </div>
  );
}

export default App;





import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <form>
          <label>
            Name:
            <input type="text" name="name" /><br/>
            Senha:
            <input type="password" name="senha" />
          </label><br/>   
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

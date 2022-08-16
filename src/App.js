import './App.css';
import { useContador } from './container/contador';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const {contador, incrementar, reduccion, reset} = useContador()

  return (
    <div className="App">
      <header className="App-header">
        <div className='contador'>
          <h1 className='title'><u>Contador</u></h1>
          <h1 className='number'> {contador} </h1>
        </div>
        <div className='botones'>
        <button onClick={reduccion} type="button" className='btn btn-warning'>Bajar Número</button>
        <button onClick={incrementar} type="button" className='btn btn-success'>Subir Número</button>
        <button onClick={reset} type="button" className='btn btn-danger'>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Saludo from './saludo';
import Despedida from './despedida';



function App() {

  const usuarioNombre = 'Eduardo'; 
  const siBienvenida = true; // Esta constante la utilizamos en el operador ternario.
  return (
    <div className="App">
      <header className="App-header">
      {siBienvenida ? <Saludo nombre={usuarioNombre} /> : <Despedida nombre={usuarioNombre} />}  
      </header>
    </div>
  );
}

export default App;

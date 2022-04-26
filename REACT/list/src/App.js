import ListComponent from './components/ListComponent';
import './App.css';


function App() {
  const list = ["Amarillo", "Azul", "Rojo", "Verde"];

  return (
    <>
      <ListComponent list={list} />
    </>
  )
}

export default App;

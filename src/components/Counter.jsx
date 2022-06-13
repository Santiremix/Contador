import {useState} from 'react';


function Counter() {

    const [count, setCount] = useState(0);
    // let num = 1;
    const [num, setNum] = useState(1);
    const aumentar = () => {
        setNum(Number(document.getElementById('salto').value))
    }

  return (
    <div>
        <h1>Contador</h1>
        <label> Valor inicial: </label>
            <input type="number" placeholder='Introduce un número' id='number' />
            <button onClick={() => setCount(Number(document.getElementById('number').value))}>Enviar</button><br></br>
            <label>Indice de salto: </label>
            <input type="number" placeholder='Salto' id='salto'/>
            <button onClick={aumentar}>Enviar</button>
        <div>
            <p><b>{count}</b></p>
            <button onClick={() => setCount(count + num)}>Incrementar</button>
            <button onClick={() => setCount(count - num)}>Decrementar</button>
        </div>
    </div>
  )
}

export default Counter

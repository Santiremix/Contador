import {useState} from 'react';


function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Contador</h1>
        <label> Valor inicial:</label>
            <input type="number" placeholder='Introduce un número' id='number' />
            <button onClick={() => setCount(Number(document.getElementById('number').value))}>Enviar</button>
        
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    </div>
  )
}

export default Counter


// export const Counter = () => {
//     const [count, setCount] = useState(0);
//   return (
//     <div>
//         <h1>Contador</h1>
//         <label> Valor inicial:
//             <input type="text" name="name" placeholder='Introduce un número' id='number' />
//         </label>
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//             <button onClick={() => setCount(count - 1)}>Decrementar</button>
//         </div>
//     </div>
//   )
// }

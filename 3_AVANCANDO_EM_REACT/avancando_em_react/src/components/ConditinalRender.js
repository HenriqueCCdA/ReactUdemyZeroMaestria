import React, { useState } from 'react'

function ConditinalRender() {

  const [x]  = useState(false);
  const [name, setName] = useState('Marcelo');

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encotrado!</p>
            </div>

        )}
        <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  )
}

export default ConditinalRender
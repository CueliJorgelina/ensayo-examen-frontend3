import { useState } from 'react'

function App() {

  // Definimos la variales de estado y los metodos que van a modificar dichos valores
  const [ nombre, setNombre ] = useState('');
  const [ edad, setEdad ] = useState(0);
  const [ pokemonFavorito, setPokemonFavorito ] = useState('');

  // Definimos los manejadores de eventos
  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeEdad = (e) => setEdad(e.target.value);
  const onChangePokemonFavorito = (e) => setPokemonFavorito(e.target.value);
  const onSubmitForm = (e) => {
    
    e.preventDefault();

    const resultValidateNombre = validateNombre( nombre );
    const resultValidateEdad = validateEdad( edad );
    const resultValidateNombrePokemon = validateNombre( pokemonFavorito );

    if( !resultValidateNombre ){
      alert('Nombre incorrecto!')
    }

    if( !resultValidateEdad ){
      alert('Edad incorrecta!')
    }

    if( !resultValidateNombrePokemon ){
      alert('Pokemon incorrecto!')
    }

    if( resultValidateNombre && resultValidateEdad && resultValidateNombrePokemon ){
      alert('El formulario ha sido enviado correctamente!')
    }
    
  }

  // Validaciones
  const validateNombre = ( nombre ) => {
    const withoutSpace = nombre.trim();
    return withoutSpace.length > 2 ? true : false;
  }

  const validateEdad = ( edad ) => {
    return edad > 17 && edad < 100 ? true : false;  
  }

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={onSubmitForm}>
        <input onChange={onChangeNombre} type="text" placeholder='Nombre'/>
        <input onChange={onChangeEdad} type="number" placeholder='Edad'/>
        <input onChange={onChangePokemonFavorito} type="text" placeholder='Pokemon Favorito'/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default App

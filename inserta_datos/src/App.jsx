const persona ={
  nombre : 'Carlos Juarez Peña',
  edad : 21,
  profesión: 'Estudiante',
  pasatiempos: [ 'Escuchar música,',
  'Videojuegos',
  'Hacer ejercicio',
  'Guisar',
  'Estar con mi familia'
  ],
  Fecha_de_nacimiento: '02/09/23',
  Lugar_nacimiento: 'San Juan Bautista Tuxtepec',
  Signo_zodiacal: 'Libra',


}


function App() {
  return(
    <div>
      <h1>Información personal</h1>
      <hr />
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesión}</li>
        <li>Fecha de nacimiento: {persona.Fecha_de_nacimiento}</li>
        <li>Lugar de nacimiento: {persona.Lugar_nacimiento}</li>
        <li>Signo zodiacal: {persona.Signo_zodiacal}</li>
        <li>Pasatiempos: 
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) =>{
                return <li key={pasatiempo}>
                  {pasatiempo}
                </li>
              })
                
            }
            
            {/*<li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
            <li>{persona.pasatiempos[3]}</li>
            <li>{persona.pasatiempos[4]}</li>*/}
          </ul>
        </li>
      </ul>

    </div>
  )
}

export default App

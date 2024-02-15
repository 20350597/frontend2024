import ListItem from "./ListItem"

const personas =[
  {
    nombre: 'Carlos Juarez Peña',
    telefono: '843459809',
    email: 'Carlos@gmail.com'
},
{
     nombre: 'Eduardo Pineda Luis',
     telefono: '843239809',
     email: 'Eduardo@gmail.com'
},
{
nombre: 'Gerardo Luis Quiroga',
telefono: ' 2447384253',
email: 'Gerardo@gmail.com'
}

]
function App() {
  return(
    <div>
      <h1>Agenda</h1>
      <hr />
      <ul>

      {
        personas.map((personas =>
          <ListItem
          key ={personas.email}
          nombre = {personas.nombre}
          telefono = {personas.telefono}
          email = {personas.email}
          />))
      }

      </ul>

    </div>
  )

}
export default App

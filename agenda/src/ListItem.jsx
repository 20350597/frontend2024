const ListItem =({nombre, telefono, email}) =>{
    return(
        <li>
            {nombre}:
            <ul>
                <li>Teléfono: {telefono}</li>
                <li>Correo: {email}</li>
            </ul>
        </li>
    )
}
export default ListItem
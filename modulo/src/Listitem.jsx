const ListItem = (props) => {
    /** Const ListItem = ({url, name}) ={
     * Método desestructurado para no usar los "Props"
     * } */
    return (
        <li>
            <a href="props.url">{props.name}</a>
        </li>
    )
}
export default ListItem
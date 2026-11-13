import './navbar.css';

export default function Navbar({UserName}){
    return(
        <>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Crear</a></li>
            <li><a href="#">Unirse</a></li>
            <li><a href="#">Descubrir</a></li>
            <li><a href="#">Buscar</a></li>
            <li><a href="#">Bienvenido, {UserName}</a></li>
        </ul>
        </>
    );
}
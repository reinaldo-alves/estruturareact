import { useState } from "react";
import { Container, ListItem } from "./styles";

interface Props {
    title?: string
    name?: string
}

function Header ({ title, name }: Props){
    const [item, setItem] = useState('Home');
    return(
        <Container>
            <div onClick={() => setItem('Home')}>
                <ListItem active={item === 'Home'}>Home</ListItem>
            </div>
            <div onClick={() => setItem('Contato')}>
                <ListItem active={item === 'Contato'}>Contato</ListItem>
            </div>
            <div onClick={() => setItem('Fotos')}>
                <ListItem active={item === 'Fotos'}>Fotos</ListItem>
            </div>
        </Container>
    )
}

export default Header;
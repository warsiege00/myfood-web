import  styled  from 'styled-components'
import { logoIcon } from '../Assets/index.js'
import { ReactComponent as CartIcon } from '../Assets/Icons/cart.svg'


const StyledHeader = styled.div`     
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
`;

const Logo = styled.img`
    width: 101px;    
`

const StyledCartIcon = styled(CartIcon)`
    path {
        color: ${props => props.theme.secondary};
    }
    align-self: center;    
`

const Button = styled.button`
    padding:  0.8em 1em;
    background: ${props => props.theme.secondary};    
    color: ${props => props.theme.primary};
    font-size: 16px;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: bold;
    border: solid 1px ${props => props.theme.secondary};
    border-radius: 0.5em;
    
    &:hover {
        background: ${props => props.theme.primary};
        color: white;
        border: solid 1px ${props => props.theme.primary};
        cursor: pointer;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.6)
    }
`

const ContainerButtons = styled.div`
    display: flex;
    gap: 40px;    
`

function Header({props}) {
    
    return (
        <StyledHeader> 
            <Logo src={logoIcon} />
            <ContainerButtons >
                <StyledCartIcon />          
                <Button type="button">Login/SignUp</Button>
            </ContainerButtons>            
        </StyledHeader>        
    )
}

export default Header;


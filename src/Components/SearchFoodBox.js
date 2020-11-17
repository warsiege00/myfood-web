import  styled  from 'styled-components'

const SelectItems = styled.select`
    width: 30%;
    height: 60px;
    border: 2px solid ${props => props.theme.secondary};
    background-color: transparent;
    color: ${props => props.theme.secondary};
    font-size: 20px;
    font-weight: 700;

    //Cleaning Select styyles
    appearance: none;
    outline: none;    
    margin-left: 35px;
    padding-left: 20px;
    
`

const Container= styled.div`
    max-width: 70%;
    padding: 25px 0;
    background-color: ${props => props.theme.primary};
    margin-top: 80px;
   
`
const Button = styled.button`
    width: 20%;
    height: 60px;
    background: ${props => props.theme.secondary};    
    color: ${props => props.theme.primary};
    font-size: 20px;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: bold;
    border: solid 1px ${props => props.theme.secondary};
    margin-left: 35px;
    
    
    &:hover {
        background: ${props => props.theme.primary};
        color: white;
        border: solid 1px ${props => props.theme.primary};
        cursor: pointer;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.6)
    }
`


const options = (item) =>{
    return <option value={item}>{item}</option>
}

function SearchFoodBox(props) {
    let cities = props.source
    let neighborhoods = props.source;

    if (cities.length == 0) {
        return <option>Nenhuma cidade</option>
    }
   

    return ( 
        <Container>
            <SelectItems>
                <option>Select your city</option>
                { cities.map( options ) }
            </SelectItems> 
            <SelectItems>
                <option>Select location</option>
                { neighborhoods.map( options ) }
            </SelectItems> 
            <Button >Find Foods</Button>
        </Container>          
    )        
}

export default SearchFoodBox
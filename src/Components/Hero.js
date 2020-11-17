import styled from 'styled-components';
import SearchFoodBox from './SearchFoodBox.js'


const Title = styled.h1`
    font-size: 55px;
    font-weight: 100;
    line-height: 70px;    
    color: ${props => props.theme.mediumGrey};
    strong, span {
        color: ${props => props.theme.primary};
    }  
    width: 50%;      
`

const SubTitle = styled.p`
    font-size: ${props => props.fontSize == "" ? 'inherit' : props.fontSize};
    font-weight: 100;
    line-height: ${props => props.lineheight == "" ? 'inherit' : props.lineheight};   
    width: ${props => props.width == "" ? 'inherit' : props.width};
    margin-bottom: ${props => props.marginBot == "" ? 'inherit' : props.marginBot};
   
`

const ContainerHero = styled.div`
    display: flex;    
    flex-direction: column;
    color: ${props => props.theme.lightGrey};
    margin-top: 60px;
    letter-spacing: 0.1em;
    margin-left: 10px;

`

//Chamar Api com STATE
const foodPlaces = [
    "Porto Alegre",
    "Pelotas"
];

function Hero() {
    return(
        <ContainerHero>            
            <Title><strong>Fresh, Delicious</strong>  meals
            to reach your optimum <span>health</span> & <span>fitness</span></Title>
            <SubTitle fontSize="22px" lineheight="25px" marginBot="80px">we can deliver even the most unusual ideas!</SubTitle>
            <SubTitle fontSize="55px" width="70%">Discover local restaurants that delivers to your doorstep!</SubTitle>
            <SearchFoodBox source={foodPlaces}/>
        </ContainerHero>        
    )
}

export default Hero;
import  styled  from 'styled-components'
import { waveBG } from '../Assets/index.js'

import  Header  from '../Components/Header.js'
import Hero from '../Components/Hero.js'

const Container = styled.div`
    padding: 10px 100px;
    background: url(${waveBG}) top right no-repeat;
    min-height: 100%auto;
`

function Home () {
    return (      
        <Container>           
            <Header/>
            <Hero />
        </Container>               
    )    
}

export default Home;

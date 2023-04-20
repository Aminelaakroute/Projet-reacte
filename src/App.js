import './App.css'

import { Container } from './components/Index';
import { Header ,Footer , Hero , Users} from './sections';


//import Header from './components/Header/Header'
//import Container from './components/Container/Container'
//import Footer from './components/Footer/Footer'

const App = () =>{
    return(
        <>
            <Header />
            <Container>
                         <Hero/>
                         <Users/>
            </Container>
            <Footer/>
        </>
        
    )
}
export default App ;
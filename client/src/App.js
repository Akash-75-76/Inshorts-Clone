
import './App.css';
//components
import Header from './components/Header';
import {Box} from '@mui/material';
import InfoHeader from './components/InfoHeader';
import { styled } from "@mui/material/styles";
import Articles from './components/Articles';
const Container=styled(Box)`
width:60%;
margin: 40px auto 0 auto;

`;
function App() {
  return (
   
   <Box>
    
    <Header />
    <Container>
       <InfoHeader />
        <Articles />
    </Container>
   
   </Box>


  );
}

export default App;

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container=styled(Box)`
    background:#f44336;
    color:#fff;
    display:flex;
    align-items:center;
    height:48px;

    `;
const Image=styled('img')({
    height:34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
});

const Text=styled(Typography)`
    font-size:14px;
    font-weight:300;
    margin-left:50px
    `;
const InfoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
          <Typography>For the best experience use inshorts app on your smartphone</Typography>
        
        <Box style={{display:'flex',marginLeft:'auto'}}>
            <Image src={appleStore} alt="apple-store" />
            <Image src={googleStore} alt="google-store" />
        </Box>
    </Container>
    )
}

export default InfoHeader
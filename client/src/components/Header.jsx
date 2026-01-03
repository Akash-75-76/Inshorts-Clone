import React from 'react';
import { AppBar, Toolbar, Typography,styled } from '@mui/material';
import {Menu} from '@mui/icons-material';
const StyledHeader = styled(AppBar)`
background:#fff;
height:70px;
`;

const MenuItem=styled(Menu)`
color:black;
`;

const  Image=styled('img')({
    height:'55px',
    margin:'auto',
    paddingRight:'70px'

})
const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <StyledHeader position='static'>
            <Toolbar>
                <MenuItem/>
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledHeader>
    );
}
export default Header;
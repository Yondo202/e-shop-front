import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from 'components/miscs/ContextMenuProvider';


const Footer = () => {
    const { footerMenu } = useContext(MenuContext);
    return (    
        <Container>
            <h6>e-shop.mn</h6>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
   text-align: center;
   border-top: 1px solid rgba(0,0,0,0.1);
   padding: 10px 0px;
   h6{
       margin-bottom: 0px;
   }
`
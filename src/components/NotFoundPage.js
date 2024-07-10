import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const NotFoundPage = () => {
    const Background = styled.div`
        width:100%;
        height:100vh;
        background-color:#3d3d3d;
        display:flex;
        justify-content:center;
        color:white;

    `

    const Container = styled.div`
        display-self:center;
        display:flex;
        flex-direction:column;
        text-align: center;
        justify-content:center;
    `
    const navigate = useNavigate();
    const back = ()=>{
        navigate("/")
    }
    return (
        <Background>
            <Container>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button className='button no-border-but' onClick={back}>Go back</button>
            </Container>
        </Background>
    );
            
};

export default NotFoundPage;
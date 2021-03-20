import React from 'react'
import styled from 'styled-components'

const LoginCard = ({ title, signIn }) => {
    return (
       <Container>
            <h1>{title}</h1>
            <button onClick={signIn} >Login with Google</button>
       </Container>
    )
}




export default LoginCard

const Container = styled.div`
    background: white;
    color: black;
    width: 400px;
    height: 300px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 30px 0;

    h1 {
        font-size: 2.5rem;
    }

    button {
        background: #FDC500;
        border: 3px transparent solid;
        padding: 10px 16px;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        border-radius: 6px;
        transition: background-color 0.23s, border 0.23s;

            :hover  {
               background-color: white;
               border: 3px #FDC500 solid;
            }

    }
`;
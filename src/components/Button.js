import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled.div`
    font-size: 1em;
    font-style: normal;
    font-weight: 600;
    color: #eeeeee;
    width: fit-content;
    height:fit-content;
    background-color: #000000;
    text-align: center;
    justify-content: center;
    padding: 30px 20px;
   

    
`


function Button() {
    return (
        <Link to='TextPage'>
            <StyledButton>
                INFO
            </StyledButton>
        </Link>
        )
}

export default Button

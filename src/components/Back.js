import React from 'react'
import styled from 'styled-components'
import { GoChevronUp} from "react-icons/go"
import { Link } from 'react-router-dom'

export const StyledBack = styled(GoChevronUp)`
    transform: scale(2);
    flex-wrap: nowrap;
    font-size: 1em;
    font-style: normal;
    font-weight: 600;
    color: #eeeeee;
    width: fit-content;
    height:fit-content;
    background-color: #000000;
    text-align: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
    top: 0;
    left: 0;
    position: fixed;
`

function Back() {
    return (
        <Link to='/'>
        <StyledBack />
        </Link>
    )
}

export default Back

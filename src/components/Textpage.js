import React from 'react'
import styled from 'styled-components'
import Back from './Back'


const media = {
    xs: (styles)=>`
    @media only screen and (max-width: 400px){
        ${styles}
    }
    `
}



export const Background = styled.div`
    background-color: #26352C;
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${(props)=>props.size};
    ${(props)=>props.collapse && media[props.collapse](
        `position: absolute;
        
        `
    )};

    
`
export const Content = styled.div`
    max-width: 75%;
    position: absolute;
    height: fit-content;
    background-color: #eeeeee;
    font-weight: 400;
    font-size: 2em;
    text-align: center;
    justify-content: center;
    padding: 2em 2em;
    top: 20%;
    flex: ${(props)=>props.size};
    ${(props)=>props.collapse && media[props.collapse](
        `display: flex-wrap;
        overflow: scroll;
        height: fit-content;
        font-size: 0.5em;
        `
    )};
`


function Textpage() {
    return (
        <Background>
            <Back />
           
            <Content>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus libero nec blandit dignissim. Duis congue lectus ligula, ac consequat enim lobortis quis. Nulla ut iaculis purus. Suspendisse fermentum consectetur augue in dictum. Integer pulvinar, arcu eu faucibus mollis, ligula nisl lacinia nibh, nec ullamcorper mi velit sed augue. Praesent euismod odio at velit tincidunt blandit quis ac augue. Cras pellentesque ac dui et feugiat. Ut eu varius lorem. Maecenas urna ante, viverra eget ex sed, viverra molestie metus.

Maecenas mollis non orci ut tincidunt. Sed in dui arcu. Donec fringilla efficitur est, ut gravida massa scelerisque vitae. Curabitur eget ipsum ac sem bibendum pulvinar eget nec metus. Duis nec enim ullamcorper sapien eleifend vehicula vitae ac neque. Suspendisse potenti. Praesent eget lobortis tellus. Duis sed semper ex.

            </Content>
        </Background>

    )
}

export default Textpage

import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import './vid.css'

export const PlayerWrapper = styled.div`
position:relative;
padding-top: 56.25%;
`
export const Player = styled.div`
position: absolute;
top: 0;
left: 0;
`


function VidOne(props) {
    return (
        <PlayerWrapper>
            
            <ReactPlayer 
            className='react-player'
            url={props.url}
            width='100%'
            height='100%'
            playing={true}
            loop={true}
            muted={true}
           />
        </PlayerWrapper>
     
    )
}

export default VidOne

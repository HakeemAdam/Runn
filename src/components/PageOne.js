import React from 'react'
import styled from 'styled-components'
import VidOne from './VidOne'

export const Grid = styled.div`
`
export const Row = styled.div`
    display:flex;
`
const media = {
    xs: (styles)=>`
    @media only screen and (max-width: 400px){
        ${styles}
    }
    `
}
export const Col = styled.div`
    flex: ${(props)=>props.size};
    ${(props)=>props.collapse && media[props.collapse](
        `display: flex-wrap;
        overflow: scroll;
        `
    )};
    margin: 0.5rem;
    padding:0.5rem;
    max-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    
  

`



function PageOne() {


    return (
      <Grid>
          <Row>
              <Col size={1}>
                  <VidOne url='https://player.vimeo.com/video/270858090' />
              </Col>
              <Col size={1}>
              <VidOne url='https://player.vimeo.com/video/324399611'/>
              </Col>
          </Row>
      </Grid>
        
    )
}

export default PageOne

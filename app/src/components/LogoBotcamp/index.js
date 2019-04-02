import styled from 'styled-components'

import logo from './../../img/botcamp.png'

const LogoBotcamp = styled.img.attrs({src: `${logo}`, alt: 'Logo Botcamp'})`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

export default LogoBotcamp

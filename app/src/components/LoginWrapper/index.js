import styled from 'styled-components'

import background from '../../img/ecossistema-background.png'

const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  padding: 120px 0 80px 0;
`

export default LoginWrapper

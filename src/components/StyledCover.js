import styled from 'styled-components'
import defaultImg from '../assets/images/defaultImg.jpeg'

export default styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`
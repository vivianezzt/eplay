import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 7px;
  display: inline-block;
`

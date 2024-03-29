import { Collapse, IconButton } from '@material-ui/core'
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '../../theme/Theme'

const ScrollBtn = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  padding-bottom: 0px;
  background-color: ${(props: DefaultTheme) => props.theme.app.box};
  color: ${(props: DefaultTheme) => props.theme.app.title};
  padding: 10px;
  border-radius: 10px;
  padding-bottom: 0px;
  border: 1px solid #ababab;
  cursor: pointer;
  opacity: 0.7;
`

const TopScrollBtn = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const scrollEvent = () => {
    if (window.scrollY > 500) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
  }, [scrollEvent])
  return (
    <Collapse in={open}>
      <ScrollBtn onClick={handleClick}>
        <VerticalAlignTopIcon />
      </ScrollBtn>
    </Collapse>
  )
}
export default TopScrollBtn

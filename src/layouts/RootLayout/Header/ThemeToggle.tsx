import styled from "@emotion/styled"
import React from "react"
import useScheme from "src/hooks/useScheme"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? <MdOutlineLightMode className="icon" /> : <MdOutlineDarkMode className="icon" />}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
